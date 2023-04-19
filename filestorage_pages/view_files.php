<?php
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

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>View Files</title>
  <link rel="stylesheet" href="../styles/filestorage.css">
</head>
<body class=file-page>
  <div class="file-view-container">
    <h1 class="file-header">Files in: <?php echo $folder_name; ?></h1>
      <div class="file-view-area">
        <?php while($file_row = mysqli_fetch_assoc($file_result)) { ?>
          <div class="file-display-container">
            <div class="file-display">
            </div>
            <p><a href="../uploads/<?php echo $file_row['file_name']; ?>" class="files-link"><?php echo $file_row['file_name']; ?></a></p>
          </div>
        <?php } ?>
      </div>
      <a href="../filestorage_pages/filestorage.php" class="back">Back</a>
  </div>
</body>
</html>

<?php
  require '../pages/watermanBottom.php';
?>
