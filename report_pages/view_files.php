<?php
include("../connections/config.php");

$folder_id = $_GET['folder_id'];

$folder_sql = "SELECT name FROM folders WHERE id = $folder_id";
$folder_result = mysqli_query($conn, $folder_sql);
$folder_row = mysqli_fetch_assoc($folder_result);
$folder_name = $folder_row['name'];

$file_sql = "SELECT * FROM uploads WHERE folder_id = $folder_id";
$file_result = mysqli_query($conn, $file_sql);
?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>View Files</title>
  <link rel="stylesheet" href="../styles/Filestorage.css">
</head>
<body>
<h1 class="file-header">Files in <?php echo $folder_name; ?></h1>
    <?php while($file_row = mysqli_fetch_assoc($file_result)) { ?>
      <div class="file-container">
      <p><a href="../uploads/<?php echo $file_row['name']; ?>" class="files-link"><?php echo $file_row['name']; ?></a></p>
      </div>
    <?php } ?>
</body>
</html>


