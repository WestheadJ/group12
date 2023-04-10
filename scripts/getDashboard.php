<?php
require("../configs/db/dbConnection.php");

$dashboardId = $_GET['dashboard_id'];
$result = mysqli_query($conn, "SELECT * FROM dashboard WHERE dashboard_id='" . $dashboardId . "';");
$toEncode = array();

while ($row = mysqli_fetch_assoc($result)) {
    $toEncode[] = $row;
}

echo json_encode($toEncode);

?>