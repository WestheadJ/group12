<!--What we need
    Button to add chart -> chart select (select chart) user click update -> display chart type.
    Return to dashboard
    Display chart
-->

<?php
  $x = null;
  $y = "class=\"selected\"";
  require 'navbar.php';
  ?>

<script src="../scripts/addGraphBtn.js"></script>
<div id="mainpage">

  <div class="mainpage-row">
    <div class="mainpage-row-item">
      <canvas id="barChartR3"></canvas>
      <a href="editGraph.php">Edit</a>
    </div>
    <div class="mainpage-row-item">
      <canvas id="pieChartR3"></canvas>
      <a href="editGraph.php">Edit</a>
    </div>
  </div>

  <div class="mainpage-row">
    <div class="mainpage-row-item">
      <canvas id="guageChart"></canvas>
      <a href="editGraph.php">Edit</a>
    </div>
    <div class="mainpage-row-item">
      <canvas id="barChart"></canvas>
      <a href="editGraph.php">Edit</a>
    </div>
    <div class="mainpage-row-item">
      <canvas id="pieChart"></canvas>
      <a href="editGraph.php">Edit</a>
    </div>
    <div class="mainpage-row-item">
        <canvas id="lineChart"></canvas>
        <a class="edit-graph" href="editGraph.php">Edit</a>
    </div>
  </div>

  <div class="mainpage-row">
    <div class="mainpage-row-item">
      <canvas id="guageChartR2"></canvas>
      <a href="editGraph.php">Edit</a>
    </div>
    <div class="mainpage-row-item">
      <canvas id="barChartR2"></canvas>
      <a href="editGraph.php">Edit</a>
    </div>
    <div class="mainpage-row-item">
      <canvas id="pieChartR2"></canvas>
      <a href="editGraph.php">Edit</a>
    </div>
  </div>

  <div class="single-mainpage-row">
    <div class="single-mainpage-row-item">
      <canvas id="guageChartR4"></canvas>
      <a class="edit-graph" href="editGraph.php">Edit</a>
    </div>
  </div> 

  <div class = "abutton">
    <button onclick="buttonClickityClick()">+</button>
  </div>

  <div class="mainpage-row" id="row-1">
    <div class="mainpage-row-item" id="row-1-item-1">
      <!-- <a href="chartSelect.php"> -->
      
      <!-- </a> -->
    </div>
  </div>
</div>