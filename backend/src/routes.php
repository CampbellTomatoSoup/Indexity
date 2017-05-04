<?php 

$app->get('/api', function ($request, $response, $args) {
    $response->write("Welcome to Indexity!");
    return $response;
});

// Go to Landing Page
$app->get('/', function ($request, $response, $args) {
        return $response->withRedirect('/index.html');
});

// Registering A User
$app->post('/api/signup', function ($request, $response) {
        $input = $request->getParsedBody();
        $stmt = $this->db->prepare("SELECT userId FROM Accounts WHERE username=:username OR email=:email");
        $stmt->bindParam("username", $input['username']);
        $stmt->bindParam("email", $input['$email']);
        $stmt->execute();
        $count = $stmt->rowCount();
        if($count<1) {
                $hashedPw = password_hash($input['password'], PASSWORD_BCRYPT);
                $addAcct = $this->db->prepare("INSERT INTO Accounts(firstName, lastName, lastLogin, email, username, password, dateJoined) VALUES (:firstName, :lastName, NOW(), :email, :username, :hashedPw, NOW())");
                $addAcct->bindParam("email", $input['email']);
                $addAcct->bindParam("username", $input['username']);
                $addAcct->bindParam("hashedPw", $hashedPw);
                $addAcct->bindParam("firstName", $input['firstName']);
                $addAcct->bindParam("lastName", $input['lastName']);
                $addAcct->execute();
                $getUser = $this->db->prepare("SELECT userId FROM Accounts WHERE username=:username AND password=:hashedPw");
                $getUser->bindParam("username", $input['username']);
                $getUser->bindParam("hashedPw", $hashedPw);
                $getUser->execute();
                $data = $getUser->fetch(PDO::FETCH_OBJ);
                $userId = $data->userId;
                require 'extra/session.php';
                $rand = generateRandomString($userId);
                $expd = 'N';
                $setSession = $this->db->prepare("INSERT INTO Sessions(userId, randString, expired) VALUES(:userId, :randString, :expired)");
                $setSession->bindParam("userId", $userId);
                $setSession->bindParam("randString", $rand);
                $setSession->bindParam("expired", $expd);
                $setSession->execute();
                $_SESSION['userId']=$userId;
                return $response->withJson($rand);

        } else  {
		$response->write(-1);
                return $response;
	}
});

// User Login
$app->post('/api/login', function ($request, $response) {
	$input = $request->getParsedBody();
    	$stmt = $this->db->prepare("SELECT password FROM Accounts WHERE username=:username");
    	$stmt->bindParam("username", $input['username']);
    	$stmt->execute();
    	$count = $stmt->rowCount();
	$data = $stmt->fetch(PDO::FETCH_OBJ);
	$hashedPw = $data->password;
	if(password_verify($input['password'], $hashedPw)) {
		$getUser = $this->db->prepare("SELECT userId FROM Accounts WHERE username=:username AND password=:hashedPw");
		$getUser->bindParam("username", $input['username']);
		$getUser->bindParam("hashedPw", $hashedPw);
		$getUser->execute();
		$data = $getUser->fetch(PDO::FETCH_OBJ);
		$userId = $data->userId;
        	$login = $this->db->prepare("UPDATE Accounts SET lastLogin = NOW() WHERE userId = :userId");
        	$login->bindParam("userId", $userId);
        	$login->execute();
		require 'extra/session.php';
		$rand = generateRandomString($userId);
		$expd = 'N';
		$setSession = $this->db->prepare("UPDATE Sessions SET randString = :randString, expired = :expired WHERE userId = :userId");
		$setSession->bindParam("userId", $userId);
		$setSession->bindParam("randString", $rand);
		$setSession->bindParam("expired", $expd);
		$setSession->execute();
		return $response->withJson($rand);
		$_SESSION['userId']=$userId;
	} else {
        	$response->write(-1);
    		return $response;
   	}
});

// Changing Password
$app->post('/api/changepassword', function ($request, $response) {
	$input = $request->getParsedBody();
	$query = trim($input['userId'], "\"");
	$user = $this->db->prepare("SELECT userId FROM Sessions WHERE randString=:randString");
        $user->bindParam("randString", $query);
        $user->execute();
        $user = $user->fetch(PDO::FETCH_OBJ)->userId;
        intval($user);
	$stmt = $this->db->prepare("SELECT password FROM Accounts WHERE userId=:userId");
        $stmt->bindParam("userId", $user);
        $stmt->execute();
	$oldHashedPw = $stmt->fetch(PDO::FETCH_OBJ)->password;
        if(password_verify($input['oldPassword'], $oldHashedPw)) {
	        $hashedPw = password_hash($input['newPassword'], PASSWORD_BCRYPT);
		$change = $this->db->prepare("UPDATE Accounts SET password=:hashedPw WHERE userId=:userId");
		$change->bindParam("hashedPw", $hashedPw);
		$change->bindParam("userId", $user);
		$change->execute();
		return $response->withJson($input['userId']);
	} else {
		echo -1;
	}
});

// Logout
$app->post('/api/logout', function ($request, $response) {
	$input = $request->getParsedBody();
	$expd = "Y";
	$logout = $this->db->prepare("UPDATE Sessions SET expired=:expd WHERE randString=:userid");
	$logout->bindParam("userid", $input['userId']);
	$logout->bindParam("expd", $expd);
	$logout->execute();
	session_unset();
	echo "Logged out: Session expired";
});

// Edit Account
$app->post('/api/edit', function ($request, $response) {
        $input = $request->getParsedBody();
	$thisuser = $this->db->prepare("SELECT userId FROM Sessions WHERE randString=:randString");
	$thisuser->bindParam("randString", $input['userId']);
	$thisuser->execute();
	/*if(empty($thisuser)){
		$response->write(-1);
		return $reponse;
	}*/
	$data = $thisuser->fetch(PDO::FETCH_OBJ);
	$user = $data->userId;
	$fields = array("firstName", "lastName", "originCity", "currJob", "currSalary");
	$query = "";
	foreach($fields as $f) {
		if(isset($input[$f]))
			$query = $query . $f . "='" . $input[$f] . "', ";
	}
	$query = trim($query, ", ");
	$query = "UPDATE Accounts SET ".$query." WHERE userId=:user";
        $update = $this->db->prepare($query);
	$update->bindParam("user", $user);
	$update->execute();
	return $response->withJson($input['userId']);
});

// NOTUSING-Comparing Cities
$app->post('/compare', function ($request, $response) {
        $input = $request->getParsedBody();
        $query = "";
        foreach($input['options'] as $selected)
        {
        	if($selected)
         	$query = $query . $selected . ", ";
        }
        echo $query;
       	$origin_city_costs = $this->db->prepare("SELECT :query FROM Cities WHERE name=:originCity");
        $origin_city_costs->bindParam("query", $query);
        $origin_city_costs->bindParam("originCity", $input['originCity']);
        $dest_city_costs = $this->db->prepare("SELECT :query FROM Cities WHERE name=:destinationCity");
        $dest_city_costs->bindParam("query", $query);
        $dest_city_costs->bindParam("destinationCity", $input['destinationCity']);
        $origin_city_costs->execute();
        $dest_city_costs->execute();
        $cost_results_origin =  $origin_city_costs->fetchAll(PDO::FETCH_OBJ);
        $cost_results_dest =  $dest_city_costs->fetchAll(PDO::FETCH_OBJ);
        echo '{"destinationCityResults": ' . json_encode($cost_results_dest) . ',"originCityResults": ' . json_encode($origin_city_costs) . '}';
});

// Get All Cities
$app->get('/api/cities', function ($request, $response, $args) {
    $sth = $this->db->prepare("SELECT name FROM Cities");
    $sth->execute();
    $cities = $sth->fetchAll();
	return $response->withJson($cities);
});

// Top 10 All Cities
$app->get('/api/top10', function ($request, $response) {
        $stmt1 = $this->db->query("SELECT name FROM Cities ORDER BY publicTrans LIMIT 10");
        $stmt2 = $this->db->query("SELECT name FROM Cities ORDER BY housing LIMIT 10");
        $stmt3 = $this->db->query("SELECT name FROM Cities ORDER BY utilities LIMIT 10");
        $stmt4 = $this->db->query("SELECT name FROM Cities ORDER BY salesTax LIMIT 10");
        $stmt5 = $this->db->query("SELECT name FROM Cities ORDER BY incomeTax LIMIT 10");
        $stmt6 = $this->db->query("SELECT name FROM Cities ORDER BY groceries LIMIT 10");
	$stmt7 = $this->db->query("SELECT name FROM Cities ORDER BY healthcare LIMIT 10");
	echo '{"publicTrans": ' . json_encode($stmt1->fetchAll()) . ',"housing": ' . json_encode($stmt2->fetchAll()) . ',"utilities": ' . json_encode($stmt3->fetchAll()) . ',"salesTax": ' . json_encode($stmt4->fetchAll()) . ',"incomeTax": ' . json_encode($stmt5->fetchAll()) . ',"groceries":' . json_encode($stmt6->fetchAll()) .
     ',"healthcare": ' . json_encode($stmt7->fetchAll()) . '}';
});

//Compare selected costs of cities saved in your current session
$app->post('/api/compare', function($request, $response, $args)
{
        $input = $request->getParsedBody();
	$query = "";
        foreach($input['options'] as $selected)
        {
                if($selected)
                	$query = $query . "SUM(" . $selected . ") + ";
        }
        $query = $query . " 0";
        $origin = $input['originCity'];
        $origin_city_costs = $this->db->prepare("SELECT " .$query . " as " . $origin . " FROM Cities WHERE name=:origin");
	$origin_city_costs->bindParam("origin", $origin);
        $origin_city_costs->execute();
        $cost_results_orig = $origin_city_costs->fetchAll();
        $reponse =  json_encode($cost_results_orig);

	$destinations = $this->db->prepare("SELECT destinationCity FROM Saves");
	$destinations->execute();
	$destinations_array = $destinations->fetchAll();
	foreach($destinations_array as $d)
        {
		$destination = $d['destinationCity'];
                echo $destination;
		$dest_city_costs = $this->db->prepare("SELECT DISTINCT " . $query . " as " . $destination . " FROM Cities WHERE name=:destination");
                $dest_city_costs->bindParam("destination", $destination);
                $dest_city_costs->execute();
                $cost_results_dest =  $dest_city_costs->fetchAll();
    
                $reponse = $reponse . ", "  . json_encode($cost_results_dest);
        }
        return $reponse;
});

//Save cities selected to compare 
$app->post('/api/search', function($request, $response){
        $input = $request->getParsedBody();
        $query = $input['userId'];
	$user = $this->db->prepare("SELECT userId, expired FROM Sessions WHERE randString=:randString");
        $user->bindParam("randString", $query);
        $user->execute();
        $data = $user->fetch(PDO::FETCH_OBJ);
	$user = $data->userId;
	$expired = $data->expired;
	echo $expired;
	if($expired=='Y') {
		return $response->withRedirect('/index.html');
	}
        intval($user);
	$stmt = $this->db->prepare("INSERT INTO Saves (originCity, destinationCity, date, userId) VALUES(:originCity, :destinationCity, NOW(), :userId)");
	$stmt->bindParam("userId", $user);
        $stmt->bindParam("originCity", $input['originCity']);
        $stmt->bindParam("destinationCity", $input['destinationCity']);
        $stmt->execute();
	
});


?>
