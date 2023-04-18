<!-- Reference link:
  https://www.w3schools.com/howto/howto_css_responsive_form.asp  -->

<?php
require 'watermanTop.php';

?>

<?php
require 'watermanTop.php';
if(isset($_GET['newGraph']))
{
  echo('<script src="../scripts/newGraph.js"></script>');

}
else{
  // echo('<script src="../scripts/editWidget.js"></script>');
  echo('test');
}
?>

<script src="../scripts/editWidget.js"></script>
<!-- <link rel="stylesheet" href="../styles/editWidget.css" /> -->

<h1 id="title">Edit Widget</h1>

<div id="graph-edit">
  <div id="graph-container">
    <canvas id="graph"></canvas>
  </div>
  <div id="form-container">
    <form onsubmit="return saveGraph(event)" method="post" id="form">
      <div class="inputItem">
        <label for="select-chart">Chart type:</label>
        <select onchange="chartChange(event)" id="select-chart" name="select-chart">

        </select>
        <label>Chart title</label>
        <input type="text" id="graph-title" name="graph-title" value="Chart" oninput="updatePreview('graph-title')">
        <label id="x-axis-label">X Axis</label>
        <input type="text" id="x-axis" name="x-axis" oninput="updatePreview('x-axis')">
        <label id="y-axis-label">Y Axis</label>
        <input type="text" id="y-axis" name="y-axis" oninput="updatePreview('y-axis')">
        <!-- <label>Graph Type</label>
            <select id="Graph Type" name="Graph Type">
              <option value="Bar Chart">Bar Chart</option>
              <option value="Pie Chart">Pie Chart</option>
              <option value="Gauge Chart">Gauge Chart</option>
            </select> -->
      </div>
      <a href="dashboard.php">Cancel</a>
      <input id="submit-button" type="submit" value="Save">
    </form>
  </div>
</div>

<div id="comment-edit">
  <h2>Preview:</h2>
  <p id="comment-preview">Loading...</p>
  <hr />
  <form onsubmit="return saveComment(event)" method="post" id="comment-form">
    <label for="comment">Edit comment:</label>
    <input id="comment-input" name="comment" />
    <input type="submit" value="Save" id="submit-button" />
  </form>
</div>

<div id="title-edit">
  <div>
    <h2>Preview:</h2>
    <p id="title-preview">Loading...</p>
    <hr />
    <form onsubmit="return saveTitle(event)" method="post" id="title-form">
      <label for="title">Edit title:</label>
      <input id="title-input" name="title" />
      <input type="submit" value="Save" id="submit-button" />

    </form>
  </div>
</div>



<?php
require 'watermanBottom.php';
?>