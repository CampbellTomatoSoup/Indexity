<?php
	function generateRandomString($userId, $length=20) {
		$characters = '0123456789abcdefghijklmnopqrstuvwxyz';
		$charactersLen = strlen($characters);
		$randomString = $userId . '?';
		for ($i = 0; $i < $length; $i++) {
			$randomString .= $characters[rand(0, $charactersLen - 1)];
		}
		return $randomString;
	}

?>
