<?php
require('../configs/db/dbConnection.php');

$widgetId = $_GET['id'];

$body = file_get_contents('php://input');

$stmt = $conn->prepare("SELECT COUNT(graph_id) as x from graph");
$stmt->execute();
$result = $stmt->get_result();
$obj = $result->fetch_object();
$id = $obj->x;

$id+=1;

$sql = "INSERT into graph (graph_id, graph_data) values('".$id."','".$body."');";

$stmt = $conn->prepare("SELECT * from dashboard");
$stmt->execute();
$result = $stmt->get_result();
$obj = $result->fetch_object();
$db_data = $obj->dashboard_data;

$array = json_decode($db_data);
var_dump($array);
// echo('<br>');
// echo('<br>');
// echo('<br>');
// echo('<br>');
// echo('<br>');

$push = array (
    'content' => array(
      'graph_id'=> $id
    ),
    'widget_id'=> $widgetId
  );


$array->configs[$widgetId] = $push;


// var_dump($array);
// echo('<br>');
// echo('<br>');
// echo('<br>');
// echo('<br>');
// echo('<br>');

$json = json_encode($array);

print_r($json)
// $sql = "UPDATE dashboard SET dashboard_data='".$json."' WHERE dashboard_id=1";

// if (mysqli_query($conn, $sql)) {
//     echo json_encode('{"status":200,"message":"updated"}');
// } else {
//     echo json_encode('{"status":500,"message":"Error updating record: ' . (string) mysqli_error($conn) . '"}');
// }
?>

