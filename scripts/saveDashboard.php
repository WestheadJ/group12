<?php
require('../configs/db/dbConnection.php');
$body = file_get_contents('php://input');
$sql = "UPDATE dashboard SET dashboard_data='" . $body . "' WHERE dashboard_id=1";

if (mysqli_query($conn, $sql)) {
    echo json_encode('{"status":200,"message":"updated"}');
} else {
    echo json_encode('{"status":500,"message":"Error updating record: ' . (string) mysqli_error($conn) . '"}');
}
?>