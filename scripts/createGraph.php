<?php
require('../configs/db/dbConnection.php');
$graph_id = $_GET['id'];
$body = file_get_contents('php://input');
$sql = "INSERT INTO graph(graph_id,graph_data) VALUES ('" . $graph_id . "','" . $body . "');";

if (mysqli_query($conn, $sql)) {
    echo json_encode('{"status":200,"message":"updated"}');
} else {
    echo json_encode('{"status":500,"message":"Error updating record: ' . (string) mysqli_error($conn) . '"}');
}
?>