<?php
require('../configs/db/dbConnection.php');
$dashboardId = $_GET['dashboard_id'];
$body = file_get_contents('php://input');
$sql = "UPDATE dashboard SET dashboard_data='" . $body . "' WHERE dashboard_id=" . $dashboardId;

if (mysqli_query($conn, $sql)) {
    echo json_encode('{"status":200,"message":"updated"}');
} else {
    echo json_encode('{"status":500,"message":"Error updating record: ' . (string) mysqli_error($conn) . '"}');
}
?>