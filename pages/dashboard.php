<?php
require 'navbar.php';
?>


<script src="../scripts/addGraphBtn.js"></script>
<div id="mainpage">

  <script src="node_modules/gridstack/dist/gridstack-h5.js"></script>
  <link href="node_modules/gridstack/dist/gridstack.min.css" rel="stylesheet" />


  <div class="mainpage-row">
    <div class="mainpage-row-item">
      <canvas id="barChartR3"></canvas>
    </div>
    <div class="mainpage-row-item">
      <canvas id="pieChartR3"></canvas>
    </div>
  </div>

  <div class="mainpage-row">
    <div class="mainpage-row-item">
      <canvas id="guageChart"></canvas>
    </div>
    <div class="mainpage-row-item">
      <canvas id="barChart"></canvas>
    </div>
    <div class="mainpage-row-item">
      <canvas id="pieChart"></canvas>
    </div>
    <div class="mainpage-row-item">
      <canvas id="lineChart"></canvas>
    </div>
  </div>

  <div class="mainpage-row">
    <div class="mainpage-row-item">
      <canvas id="guageChartR2"></canvas>
    </div>
    <div class="mainpage-row-item">
      <canvas id="barChartR2"></canvas>
    </div>
    <div class="mainpage-row-item">
      <canvas id="pieChartR2"></canvas>
    </div>
  </div>

  <div class="single-mainpage-row">
    <div class="single-mainpage-row-item">
      <canvas id="guageChartR4"></canvas>
    </div>
  </div>

  <div class="abutton">
    <button onclick="buttonClickityClick()">+</button>
  </div>

  <div class="mainpage-row" id="row-1">
    <div class="mainpage-row-item" id="row-1-item-1">
      <!-- <a href="chartSelect.php"> -->

      <!-- </a> -->
    </div>
  </div>
</div>