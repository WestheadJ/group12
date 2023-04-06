<?php
require("../configs/db/dbConnection.php");

$graph_id = $_GET['graph_id'];
$result = mysqli_query($con, "SELECT * FROM graph WHERE graph_id ='" . $graph_id . "';");
$to_encode = array();

while ($row = mysqli_fetch_assoc($result)) {
    $to_encode[] = $row;
}

echo json_encode($to_encode);

?>