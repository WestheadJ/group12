<?php
$servername = "sp2023.mysql.database.azure.com";
$username = "Group12";
$password = "gR0up12_Sp";
$dbname = "group12";
$port = 3306;
// Create connection
$conn = new mysqli($servername, $username, $password, $dbname, $port);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>