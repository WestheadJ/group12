<?php require 'index.php'; ?>
<!-- <script src="http://localhost/greenSpace/group12/node_modules/gridstack/dist/gridstack-h5.js"></script>
<link href=" http://localhost/greenSpace/group12/node_modules/gridstack/dist/gridstack.min.css" rel="stylesheet" /> -->
<link href="../node_modules/gridstack/dist/gridstack.min.css" rel="stylesheet"/>
<script src="../node_modules/gridstack/dist/gridstack-all.js"></script>
<style type="text/css">
    .grid-stack {
        background: #FAFAD2;
    }
</style>

<div class="grid-stack">
  <div class="grid-stack-item" gs-w="8" gs-h="4">
    <div class="chart-container" style="position: relative;">
      <canvas id="barChartR3"></canvas>
    </div>
  </div>
  <div class="grid-stack-item" gs-w="2">
    <canvas id="pieChartR3"></canvas>
  </div>
  <div class="grid-stack-item" gs-w="3">
    <canvas id="guageChart"></canvas>
  </div>
  <div class="grid-stack-item" gs-w="2">
    <div class="grid-stack-item-content">Item 2 wider</div>
  </div>
  <div class="grid-stack-item" gs-w="2">
    <div class="grid-stack-item-content">Item 2 wider</div>
  </div>
</div>

<script type="text/javascript">
      GridStack.init();
</script>