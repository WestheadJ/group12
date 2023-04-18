<?php
include("../configs/db/dbConnection.php");


if(isset($_POST['create_folder'])) {
  $folder_name = $_POST['folder_name'];
  
  if(!empty($folder_name)) {
    $sql = "INSERT INTO folders (folder_name) VALUES ('$folder_name')";
    mysqli_query($conn, $sql);
  }
}

$folder_sql = "SELECT * FROM folders";
$folder_result = mysqli_query($conn, $folder_sql);
?>

<?php
require '../pages/watermanTop.php';

?>


<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="../styles/filestorage.css">
  <title>File Storage</title>

</head>
<body>
<div class="main-container">
  <div class="folder-container">
    <h2>Create Folder</h2>
    <form class="create-folder" action="" method="POST">
      <input type="text" name="folder_name" id="folder_name" placeholder="Enter folder name" class="create-folder-input">
    <input type="submit" name="create_folder" value="+ New Folder" class="create-folder-btn">
    </form>
  </div>
  
  <div class="file-container">
    <h2>Upload File</h2>
    <form class="file-upload" enctype="multipart/form-data" action="" name="form" method="post" >
      <div class="input-container">
            <div class="file-input">
                <input type="file" name="file" id="file" />
            </div>
      <!-- https://www.sourcecodester.com/php/9668/upload-and-download-files-php.html -->
      <!-- The source I used to help me implement a file upload form.-->
            <div class="folder-select">
                <select name="folder_id">
                    <option value="" disabled selected>Select folder &darr; </option>
                    <?php while($row = mysqli_fetch_assoc($folder_result)) { ?>
                        <option value="<?php echo $row['folder_id']; ?>"><?php echo $row['folder_name']; ?></option>
                    <?php } ?>
                </select>
            </div>
        </div>
        <br>
        <input type="submit" name="submit" id="submit" value="Submit" class="submit-button" />
    </form>
  </div>
</div>
  <?php

  if(isset($_POST['submit'])) {

    $name = $_FILES['file']['name'];
    $tmp_name = $_FILES['file']['tmp_name'];

    $upload_dir = '../uploads/';  
    $target_file = $upload_dir . basename($name);
    move_uploaded_file($tmp_name, $target_file);

    $folder_id = $_POST['folder_id'];

    //https://stackoverflow.com/questions/18929178/move-uploaded-file-function-is-not-working
    //The source I used to help me move the uploaded files into the uploads folder. 

    $sql = "INSERT INTO files (file_name, folder_id) VALUES ('$name', '$folder_id')";
    mysqli_query($conn, $sql);
  }
  include("view_folders.php");
  ?>
  
</body>
</html>

<?php
require '../pages/watermanBottom.php';
?>