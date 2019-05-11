<?php
	function randomstring($length) {
	    $characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
	    $charactersLength = strlen($characters);
	    $randomString = '';
	    for($a = 1; $a <= $length; $a++)
	    {
	    	for ($i = 0; $i < 32; $i++) {
		        $randomString .= $characters[rand(0, $charactersLength - 1)] ;
		    }

	    }
		    
	    return $randomString;
	}
	echo randomstring(1);
?>