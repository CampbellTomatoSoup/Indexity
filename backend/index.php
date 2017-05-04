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

$app->options('/{routes:.+}', function ($request, $response, $args) {
    return $response;
});

$app->add(function ($req, $res, $next) {
    $response = $next($req, $res);
    return $response
            ->withHeader('Access-Control-Allow-Origin', '*')
            ->withHeader('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Accept, Origin, Authorization')
            ->withHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
}); 

       $app->run();
?>
