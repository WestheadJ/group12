<?php
// UNCOMMENT AND CHANGE VALUES AS NEEDED 
// TO RUN: Go to base URL e.g mine is localhost/group12 then add /configs/db/addGraphs.php

require("dbConnection.php");

$json = file_get_contents("../dashboards/dashboard.json");
$id = 1;

$query = $conn->prepare("INSERT INTO dashboard(dashboard_id,dashboard_data) VALUES (?,?)");
$query->bind_param("is", $id, $json);
$query->execute();
?>