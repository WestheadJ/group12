<?php
require_once("../configs/db/dbConnection.php");

$folder_id = $_GET['folder_id'];

$folder_sql = "SELECT folder_name FROM folders WHERE folder_id = $folder_id";
$folder_result = mysqli_query($conn, $folder_sql);
$folder_row = mysqli_fetch_assoc($folder_result);
$folder_name = $folder_row['folder_name'];

$file_sql = "SELECT * FROM files WHERE folder_id = $folder_id";
$file_result = mysqli_query($conn, $file_sql);
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title><?php echo "View Files in " . $folder_name; ?></title>
  <link rel="stylesheet" href="../styles/filestorage.css">
</head>
<body>
  <h1 class="file-header"><?php echo "Files in " . $folder_name; ?></h1>
  <?php 
    while($file_row = mysqli_fetch_assoc($file_result)) { 
  ?>
      <div class="file-container">
        <p><a href="../uploads/<?php echo $file_row['file_name']; ?>" class="files-link"><?php echo $file_row['file_name']; ?></a></p>
      </div>
  <?php 
    } 
  ?>
</body>
</html> - does this code. <?php
  require '../pages/watermanTop.php';
?>
<link rel="stylesheet" href="../styles/waterman.css">

<?php
include("../configs/db/dbConnection.php");


$folder_id = $_GET['folder_id'];

$folder_sql = "SELECT folder_name FROM folders WHERE folder_id = $folder_id";
$folder_result = mysqli_query($conn, $folder_sql);
$folder_row = mysqli_fetch_assoc($folder_result);
$folder_name = $folder_row['folder_name'];

$file_sql = "SELECT * FROM files WHERE folder_id = $folder_id";
$file_result = mysqli_query($conn, $file_sql);
?>