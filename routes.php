<?php

// Routes
$app->get('/api', function ($request, $response, $args) {
    $response->write("Welcome to Indexity!");
    return $response;
});

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
                $addAcct = $this->db->prepare("INSERT INTO Accounts(email, username, password, dateJoined) VALUES(:email, :username, :hashedPw, NOW())");
                $addAcct->bindParam("email", $input['email']);
                $addAcct->bindParam("username", $input['username']);
                $addAcct->bindParam("hashedPw", $hashedPw);
                $addAcct->execute();
		$addUser = $this->db->prepare("INSERT INTO Users(firstName, lastName, lastLogin) VALUES(:firstName, :lastName, NOW())");
                $addUser->bindParam("firstName", $input['firstName']);
                $addUser->bindParam("lastName", $input['lastName']);
                $addUser->execute();

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
        	$login = $this->db->prepare("UPDATE Users SET lastLogin = NOW() WHERE userId = :userId");
        	$login->bindParam("userId", $userId);
        	$login->execute();

		require 'extra/session.php';
		$userid = generateRandomString($userId);
		$expd = 'N';
		$setSession = $this->db->prepare("UPDATE Sessions SET randString = :randString, expired = :expired WHERE userId = :userId");
		$setSession->bindParam("userId", $userId);
		$setSession->bindParam("randString", $userid);
		$setSession->bindParam("expired", $expd);
		$setSession->execute();
		return $response->withJson($userid);
		//$_SESSION['userId']=$userId;
	} else {
        	$response->write(-1);
    		return $response;
   	}
});

// Changing Password
$app->post('/api/changepassword', function ($request, $response) {
	$input = $request->getParsedBody();
	if(!empty($_SESSION['userId'])) {
                $sessionUserId = $_SESSION['userId'];
                $hashedPw = password_hash($input['newPassword'], PASSWORD_BCRYPT);
		$change = $this->db->prepare("UPDATE Accounts SET password=:hashedPw WHERE userId=:userId");
		$change->bindParam("hashedPw", $hashedPw);
		$change->bindParam("userId", $sessionUserId);
		$change->execute();
		return $response;
        }
        if(empty($_SESSION['userId'])) {
                echo "Sorry, please sign in or register first";
        }
});
/*
// Logging out
$app->put('api/user/[{userid}]/logout', function ($request, $response, $args) {
	$input = $request->getParsedBody();
	$expd = 'Y';
	$logout = $this->db->prepare("UPDATE Sessions SET expired=:expd WHERE randString=:userid");
	$logout->bindParam("userid", $args['userid']);
	$logout->bindParam("expd", $expd);
});
*/

// Comparing Cities
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


// get all cities
$app->get('/api/cities', function ($request, $response, $args) {
    $sth = $this->db->prepare("SELECT name FROM Cities");
    $sth->execute();
    $cities = $sth->fetchAll();
	return $response->withJson($cities);
});

$app->get('/top10', function ($request, $response) {

       $stmt1 = $this->db->query("SELECT name FROM Cities ORDER BY publicTrans LIMIT 10");
       $stmt2 = $this->db->query("SELECT name FROM Cities ORDER BY housing LIMIT 10");
       $stmt3 = $this->db->query("SELECT name FROM Cities ORDER BY utilities LIMIT 10");
       $stmt4 = $this->db->query("SELECT name FROM Cities ORDER BY salesTax LIMIT 10");
       $stmt5 = $this->db->query("SELECT name FROM Cities ORDER BY incomeTax LIMIT 10");
       $stmt6 = $this->db->query("SELECT name FROM Cities ORDER BY groceries LIMIT 10");
       $stmt7 = $this->db->query("SELECT name FROM Cities ORDER BY healthcare LIMIT 10");
        // $stmt1->execute();
        // $stmt2->execute();
        // $stmt3->execute();
        // $stmt4->execute();
        // $stmt5->execute();
        // $stmt6->execute();
        // $stmt7->execute();
        // $sendstatement1 =  $stmt1->fetchAll(PDO::FETCH_OBJ);
        // $sendstatement2 =  $stmt2->fetchAll(PDO::FETCH_OBJ);
        // $sendstatement3 =  $stmt3->fetchAll(PDO::FETCH_OBJ);
        // $sendstatement4 =  $stmt4->fetchAll(PDO::FETCH_OBJ);
        // $sendstatement5 =  $stmt5->fetchAll(PDO::FETCH_OBJ);
        // $sendstatement6 =  $stmt6->fetchAll(PDO::FETCH_OBJ);
        // $sendstatement7 =  $stmt7->fetchAll(PDO::FETCH_OBJ);

  echo '{"publicTrans": ' . json_encode($stmt1->fetchAll()) . ',"housing": ' . json_encode($stmt2->fetchAll()) . ',"utilities": ' . json_encode($stmt3->fetchAll()) . ',"salesTax": ' . json_encode($stmt4->fetchAll()) . ',"incomeTax": ' . json_encode($stmt5->fetchAll()) . ',"groceries":' . json_encode($stmt6->fetchAll()) .
     ',"healthcare": ' . json_encode($stmt7->fetchAll()) . '}';

});
