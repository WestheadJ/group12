<!-- Reference link:
  https://www.w3schools.com/howto/howto_css_responsive_form.asp  -->

<?php
require 'watermanTop.php';

?>

<?php
// require 'watermanTop.php';
if(isset($_GET['newGraph']))
{
  echo('<script src="../scripts/newGraph.js"></script>');
}
else{
  echo('<script src="../scripts/editWidget.js"></script>');
  echo('test');
}
?>

<link rel="stylesheet" href="../styles/editWidget.css" /> 


<?php if(isset($_GET['newGraph'])):?>
  <h1 id="title">Adding New Chart</h1>
  <canvas id="dummy"></canvas>
  <div id="graph-edit">
  <div id="form-container">
    <form onsubmit="return saveGraph(event)" method="post" id="form">
      <div class="inputItem">
<?php else:?>
  <h1 id="title">Edit Chart</h1>
  <div id="graph-edit">
  <div id="graph-container">
    <canvas id="graph"></canvas>
  </div>
  <div id="form-container">
    <form onsubmit="return saveGraph(event)" method="post" id="form">
      <div class="inputItem">
<?php endif; ?>


<?php if(isset($_GET['newGraph'])):?>
  <label for="select-chart">Chart type:</label>
        <select onchange="chartChange(event)" id="select-chart" name="select-chart">
        <option value="Bar Chart">Bar Chart</option>
              <option value="Pie Chart">Pie Chart</option>
              <option value="Gauge Chart">Gauge Chart</option>
            </select>
<?php else:?>

<?php endif; ?>
        </select>
        <label>Chart title</label>
        <input type="text" id="graph-title" name="graph-title" value="Chart" oninput="updatePreview('graph-title')">
        <label id="x-axis-label">X Axis</label>
        <input type="text" id="x-axis" name="x-axis" oninput="updatePreview('x-axis')">
        <label id="y-axis-label">Y Axis</label>
        <input type="text" id="y-axis" name="y-axis" oninput="updatePreview('y-axis')">
      </div>
      <a href="dashboard.php">Cancel</a>
      <input id="submit-button" type="submit" value="Save">
    </form>
  </div>
</div>

<?php
require 'watermanBottom.php';
?>