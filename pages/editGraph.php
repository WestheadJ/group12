<!-- Reference link: 
  https://www.w3schools.com/howto/howto_css_responsive_form.asp  -->

<?php
  require 'navbar.php';
?>

<script src="../scripts/editChart.js"></script>
<link rel="stylesheet" href="../styles/editGraph.css"/>

<?php 
  require_once("../configs/dbConnection.php");
  //create sql statment
  // $sql = "SELECT * FROM graph";
  // $result = mysqli_query($con, $sql);

  // //prints result object
  // print_r($result);
  // echo("<br>");
  echo $_GET['graph_id']

?>


<h1 id="title">Edit Graph OR Chart</h1>
<div id="main-content">
  <div id="graph-container">
    <h3>Preview:</h3>
    <canvas id="editBarChart"></canvas>
  </div>
  <div id="form-container">
    <h3>Options:</h3>
    <form onsubmit="return save(event)" method ="post" id="form">
      <input type="text" id="graph-title" name="graph-title" value="Chart" oninput="updatePreview()">
      <a href="dashboard.php">Cancel</a>
      <input id="submit-button" type="submit" value="Save">
    </form>
  </div>
</div>

