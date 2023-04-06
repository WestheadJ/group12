<!-- Reference link:
  https://www.w3schools.com/howto/howto_css_responsive_form.asp  -->

<?php
require 'watermanTop.php';

?>

<script src="../scripts/editChart.js"></script>
<link rel="stylesheet" href="../styles/editGraph.css" />

<h1 id="title">Edit Graph OR Chart</h1>
<div id="main-content">
  <div id="graph-container">
    <h3>Preview:</h3>
    <canvas id="edit-bar-chart"></canvas>
  </div>
  <div id="form-container">
    <h3>Options:</h3>
    <form onsubmit="return save(event)" method="post" id="form">
      <input type="text" id="graph-title" name="graph-title" value="Chart" oninput="updatePreview()">
      <a href="dashboard.php">Cancel</a>
      <input id="submit-button" type="submit" value="Save">
    </form>
  </div>
</div>

<link rel="stylesheet" href="../styles/editGraph.css">

<!-- JAMES: Need to discuss this friday 07.04 -->

<!-- <div class="main">
  <div class="container">
    <div class="item1">
      <h1>Edit Graph OR Chart</h1>

      <script src="../scripts/editChart.js"></scrip>
      <div class="graphItem">
        <canvas id="editBarChart"></canvas>
      </div>

    </div>
    <div class="formItem">
      <div class="inputItem">
        <form action="gridStack.php" method="post">

          <label>Chart title</label>
          <input cla type="text" id="gTitle" name="graphTitle" placeholder="Your Graph Title..">
          <label>X Axis</label>
          <input type="text" id="xAxis" name="XAxis" placeholder="Your Graph X Axis Label..">
          <label>Y Axis</label>
          <input type="text" id="yAxis" name="YAxis" placeholder="Your Graph Y Axis Label..">
          <label>Graph Type</label> -->
<!-- JAMES: Will need to be the list of all the graphs we have ( we need more with fake data already in them) -->
<!-- <select id="Graph Type" name="Graph Type">
  <option value="Bar Chart">Bar Chart</option>
  <option value="Pie Chart">Pie Chart</option>
  <option value="Gauge Chart">Gauge Chart</option>
</select> -->
<!-- JAMES: Why is there a graph Description needed? If anything that should be stored on the db and then used as a tooltip when adding graphs...  -->
<!-- <label>Graph Description</label>
<textarea id="Graph Description" name="Graph Description" placeholder="Enter any details.."
  style="height:200px"></textarea>
</div>
<div class="buttonItem">
  <div>
    <input type="submit" value="Update">
  </div>
  <div>
    <button class="cancel" href="gridStack.php">Cancel</button>
  </div>
  <div>
    <button class="cancel" href="#">Update</button>
  </div>
</div>
</form>
</div>

</div>
</div> -->

<?php
require 'watermanBottom.php';
?>