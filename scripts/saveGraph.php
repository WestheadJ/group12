<?php
require('../configs/db/dbConnection.php');

$result = mysqli_query($conn, "SELECT COUNT(graph_id) as x from graph");
$toEncode = array();

while ($row = mysqli_fetch_assoc($result)) {
    $toEncode[] = $row;
    var_dump($row);
}

$body = file_get_contents('php://input');
// $sql = "INSERT into graph (graph_id, graph_data) values ($result[0][0], $body)"; 

// if (mysqli_query($conn, $sql)) {
//     echo json_encode('{"status":200,"message":"updated"}');
// } else {
//     echo json_encode('{"status":500,"message":"Error updating record: ' . (string) mysqli_error($conn) . '"}');
// }
?>