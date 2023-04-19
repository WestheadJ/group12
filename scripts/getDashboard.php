<?php
require("../configs/db/dbConnection.php");

$result = mysqli_query($conn, "SELECT * FROM dashboard WHERE dashboard_id='1';");
$toEncode = array();

while ($row = mysqli_fetch_assoc($result)) {
    $toEncode[] = $row;
}

echo json_encode($toEncode);

?>