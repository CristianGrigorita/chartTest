<?php 
//setting header to json
header('Content-Type: application/json');

//database
define('DB_HOST', 'localhost');
define('DB_USERNAME', 'root');
define('DB_PASSWORD', '');
define('DB_NAME', 'mydb');

//get connection
$mysqli = new mysqli(DB_HOST, DB_USERNAME, DB_PASSWORD, DB_NAME);
 
if(!$mysqli){
	die('Connection failed: ' . $mysqli->error);
}

//query to get data from table
$query = sprintf("SELECT userid, facebook, twitter, instagram FROM followers");

//execute query
$result = $mysqli->query($query);

//loop throught the returned data
$data = array();
foreach ($result as $row) {
	$data[] = $row;
}

//free memory associated with result
$result->close();

//close connection
$mysqli->close();

//now print the data
print json_encode($data);