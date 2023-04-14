<?php
require("../configs/db/dbConnection.php");

$result = mysqli_query($conn, "SELECT * FROM graph");
$to_encode = array();

while ($row = mysqli_fetch_assoc($result)) {
    $to_encode[] = $row;
}

echo json_encode($to_encode);

?>