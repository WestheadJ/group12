<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Edit</title>
</head>
<body>
<?php $x = null; $y = null; require('navbar.php') ?>
<form action ="dashboard.php" method = "post">
        Graph Title<input Title = " Title" type = "text">
        Graph X Axis Label<input  X Label = "X Axis Label" type = "text">
        Graph Y Axis Label<input  Y Label = "Y Axis Label" type = "text">

        <input type = "Submit">
</body>
</html>