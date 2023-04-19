<?php
require('../configs/db/dbConnection.php');
$graph_id = $_GET['graph_id'];
$body = file_get_contents('php://input');
$sql = "UPDATE graph SET graph_data='" . $body . "' WHERE graph_id=" . $graph_id;

if (mysqli_query($conn, $sql)) {
    echo json_encode('{"status":200,"message":"updated"}');
} else {
    echo json_encode('{"status":500,"message":"Error updating record: ' . (string) mysqli_error($conn) . '"}');
}
?>