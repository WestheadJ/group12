<!-- Reference link: 
  https://www.w3schools.com/howto/howto_css_responsive_form.asp  -->

<?php
  require 'navbar.php';
?>

<script src="../scripts/editChart.js"></script>
<link rel="stylesheet" href="../styles/editGraph.css"/>

<h1 id="title">Edit Graph OR Chart</h1>
<div id="main-content">
  <div id="graph-container">
    <h3>Preview:</h3>
    <canvas id="editBarChart"></canvas>
  </div>
  <div id="form-container">
    <h3>Options:</h3>
    <form action="../scripts/editConfigs.php" method ="post">
      <input cla type="text" id="gTitle" name="graphTitle" placeholder="Your Graph Title..">
      <input type="text" id="xAxis" name="XAxis" placeholder="Your Graph X Axis Label..">
      <input type="text" id="yAxis" name="YAxis" placeholder="Your Graph Y Axis Label..">
      <select id="Graph Type" name="Graph Type">
        <option value="Bar Chart">Bar Chart</option>
        <option value="Pie Chart">Pie Chart</option>
        <option value="Gauge Chart">Gauge Chart</option>
      </select>
      <input id="submit-button" type="submit" value="Update">
      <a href="dashboard.php">Cancel</a>
    </form>
  </div>
</div>