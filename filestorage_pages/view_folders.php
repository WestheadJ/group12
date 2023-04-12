<?php
include("../configs/db/dbConnection.php");

if(isset($_POST['delete_folder'])) {
  $folder_id = $_POST['folder_id'];

  $delete_files_sql = "DELETE FROM files WHERE folder_id='$folder_id'";
  mysqli_query($conn, $delete_files_sql);

  $delete_folder_sql = "DELETE FROM folders WHERE folder_id='$folder_id'";
  mysqli_query($conn, $delete_folder_sql);
}

$folder_sql = "SELECT * FROM folders";
$folder_result = mysqli_query($conn, $folder_sql);
?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>
  <h1 class="folders-heading">Folders</h1>

  <?php while($folder_row = mysqli_fetch_assoc($folder_result)) { ?>
    <div class="folder-container">
      <a href="view_files.php?folder_id=<?php echo $folder_row['folder_id']; ?>" class="folder-link"><?php echo $folder_row['folder_name']; ?></a>
      <form action="" method="POST">
        <input type="hidden" name="folder_id" value="<?php echo $folder_row['folder_id']; ?>">
        <input type="submit" name="delete_folder" value="Delete" class="delete-button" onclick="return confirm('Are you sure you want to delete this folder, and the files contained within it?')">
      </form>
    </div>
  <?php } ?>
</body>
</html>