<?php
// Routes
require '../vendor/autoload.php';
$app = new \Slim\App();

$app->get('/hello', function($request, $response, $args) {
	$response->write("Welcome to Indexity!");
	return $response;
});

$app->get('/top10', function($req, $res, $args){
	$stmt = $this->db->query("SELECT name FROM Cities ORDER BY publicTrans LIMIT 10");
	$res->withJson($stmt->fetchAll());
	//print_r(json_encode($stmt->fetchAll());
	//echo "here";
	//return $this->res->withJson(json_encode($stmt->fetchAll()));
});
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
                $_SESSION['userId']=$userId;
                return $response->withRedirect('/home.php', 301);
        } else  {
                echo "already have email or username";
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
                $rand = generateRandomString($userId);
                $expd = 'N';
                $setSession = $this->db->prepare("UPDATE Sessions SET randString = :randString, expired = :expired WHERE userId = :userId");
                $setSession->bindParam("userId", $userId);
                $setSession->bindParam("randString", $rand);
                $setSession->bindParam("expired", $expd);
                $setSession->e
