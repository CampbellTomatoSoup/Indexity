<?php
        session_cache_limiter(false);
        session_start();

	use \Psr\Http\Message\ServerRequestInterface as Request;
	use \Psr\Http\Message\ResponseInterface as Response;

	require '../vendor/autoload.php';

	$settings = require '../src/settings.php';

	$app = new \Slim\App($settings);

	require '../src/dependencies.php';
	require '../src/routes.php';
	require '../src/middleware.php';

	$app->run();
