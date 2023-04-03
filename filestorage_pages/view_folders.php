<?php
include("../connections/config.php");

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
    <p>
    <div class="folder-container">
    <a href="view_files.php?folder_id=<?php echo $folder_row['id']; ?>" class="folder-link"><?php echo $folder_row['name']; ?></a>
      </div>
    </p>
  <?php } ?>
</body>
</html>
