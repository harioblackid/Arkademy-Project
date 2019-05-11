<?php
$a1=array("c","n","m","b");
$b1=array("m","k","v","f");
array_multisort($a1, $b1);
echo $a1[0][0];
echo $b1[0][0];

?>