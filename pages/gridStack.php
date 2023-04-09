<?php

//require 'navbar.php';
require 'watermanTop.php';

if (!isset($_GET["edit"])) {
  $edit = "t";
} else {
  $edit = $_GET["edit"];
}

?>
<!-- <script src="http://localhost/greenSpace/group12/node_modules/gridstack/dist/gridstack-h5.js"></script>
<link href=" http://localhost/greenSpace/group12/node_modules/gridstack/dist/gridstack.min.css" rel="stylesheet" /> -->
<link href="../node_modules/gridstack/dist/gridstack.min.css" rel="stylesheet" />
<script src="../node_modules/gridstack/dist/gridstack-all.js"></script>

<script src="../scripts/simpleCharts.js"></script>

<?php if ($edit == "f") : ?>
  <a class="btn btn-primary" onclick="alert('Dashboard saved');" id="float" href="http://localhost/greenSpace/group12/pages/gridStack.php?edit=t">Save Dashboard</a>
  <br>
  <a onclick="addGraph()" class="btn btn-primary">Add graph |</a>
  <a onclick="addTitle()" class="btn btn-primary">Add title box |</a>
  <a onclick="addComment()" class="btn btn-primary">Add comment box</a>
<?php else : ?>
  <a class="btn btn-primary" onclick="alert('Edit dasboard');" id="float" href="http://localhost/greenSpace/group12/pages/gridStack.php?edit=f">Edit Dashboard</a>
<?php endif; ?>


<div class="grid-stack">
  <div class="grid-stack-item" gs-w="8" gs-h="4">
    <div class="chart-container" style="position: relative;">
      <canvas id="barChartR3"></canvas>
    </div>
  </div>
  <div class="grid-stack-item" gs-w="3" gs-x="2" gs-y="8" gs-h="2">
    <canvas id="pieChartR3"></canvas>
  </div>
  <div class="grid-stack-item" gs-w="3" gs-x="2" gs-y="9" gs-h="0">
    <canvas id="guageChart"></canvas>
  </div>
  <div class="grid-stack-item" gs-w="9" gs-x="0" gs-y="0" gs-h="1">
    <div class="grid-stack-item-content">
      <h1 class="title">The Great Dashboard</h1>
    </div>
  </div>
  <div class="grid-stack-item" gs-w="2" gs-x="8" gs-y="4" gs-h="1">
    <div class="grid-stack-item-content">
      <p>Comment:
        When the guage is in the RED <---- CALL BILL !!!!! </p>
    </div>
  </div>
</div>


<?php
require 'popout.php';
?>

<?php if ($edit == "f") : ?>
  <script type="text/javascript">
    var grid = GridStack.init();
    grid.setStatic(false);
  </script>
<?php else : ?>
  <script type="text/javascript">
    var grid = GridStack.init();
    grid.setStatic(true);
  </script>
<?php endif; ?>


<script type="text/javascript">
  function addGraph() {
    grid.addWidget({
      x: 0,
      y: 0,
      w: 8,
      h: 2,
      content: 'GRAPH'
    });
    console.log(added)
  }

  function addTitle() {
    grid.addWidget({
      x: 0,
      y: 0,
      w: 4,
      content: 'TITLE'
    });
    console.log(added)
  }

  function addComment() {
    grid.addWidget({
      x: 0,
      y: 0,
      w: 4,
      content: 'COMMENT'
    });
    console.log(added)
  }
</script>



<?php
require 'watermanBottom.php';
?>