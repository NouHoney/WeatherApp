<?php 

$str = file_get_contents('/home/nourhan/weather_14.json');
$json = json_decode($str, true);
echo '<pre>' . print_r($json, true) . '</pre>';

?>