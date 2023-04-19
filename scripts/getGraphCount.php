<?php
require("../configs/db/dbConnection.php");

$graph_id = $_GET['graph_id'];
$result = mysqli_query($conn, "SELECT COUNT(graph_id) as f from graph");
$to_encode = array();

// while ($row = mysqli_fetch_assoc($result)) {
//     $to_encode[] = $row;
// }

$stmt = $conn->prepare("SELECT COUNT(graph_id) as x from graph");
$stmt->execute();
$result = $stmt->get_result();
$obj = $result->fetch_object();
$graph_count = $obj->f;

echo json_encode($graph_count);

?>