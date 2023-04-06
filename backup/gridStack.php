<?php 
require '../pages/navbar.php';
?>
<!-- <script src="http://localhost/greenSpace/group12/node_modules/gridstack/dist/gridstack-h5.js"></script>
<link href=" http://localhost/greenSpace/group12/node_modules/gridstack/dist/gridstack.min.css" rel="stylesheet" /> -->
<link href="../node_modules/gridstack/dist/gridstack.min.css" rel="stylesheet"/>
<script src="../node_modules/gridstack/dist/gridstack-all.js"></script>
<style type="text/css">
    .grid-stack {
      background-color: null;
    }
</style>

<div class="grid-stack">
  <div class="grid-stack-item" gs-w="8" gs-h="4">
    <div class="chart-container" style="position: relative;">
      <canvas id="barChartR3"></canvas>
      <a class="cancel" href="editGraph.php">Edit</a>
    </div>
  </div>
  <div class="grid-stack-item" gs-w="3" gs-x="2" gs-y="8" gs-h="2">
    <canvas id="pieChartR3"></canvas>
  </div>
  <div class="grid-stack-item" gs-w="3" gs-x="2" gs-y="9" gs-h="0">
    <canvas id="guageChart"></canvas>
  </div>
  <div class="grid-stack-item"  gs-w="9" gs-x="0" gs-y="0" gs-h="1">
    <div class="grid-stack-item-content">
      <h1 class="title">The Great Dashboard</h1>
    </div>
  </div>
  <div class="grid-stack-item" gs-w="2" gs-x="8" gs-y="4" gs-h="1">
    <div class="grid-stack-item-content">
      <p>Comment: <br>
        When the guage is in the RED <----
        CALL BILL !!!!!
      </p>
    </div>
  </div>
</div>

<?php
  require '../pages/popout.php';
?>

<script type="text/javascript">
      GridStack.init();
</script>
