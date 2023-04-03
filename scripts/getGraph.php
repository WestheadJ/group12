<?php 
  require_once("../configs/dbConnection.php");
  //create sql statment
  // $sql = "SELECT * FROM graph";
  // $result = mysqli_query($con, $sql);

  // //prints result object
  // print_r($result);
  // echo("<br>");
  $result = mysqli_query($con,"SELECT * FROM graph");
$to_encode = array();
while($row = mysqli_fetch_assoc($result)) {
  $to_encode[] = $row;
}
echo json_encode($to_encode);

?>