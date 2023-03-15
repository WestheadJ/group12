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

      <!-- Chart Option #1  -->
      <div class="mainpage-row-item" id="chart-container">
          <!-- <div id="chart-container">FusionCharts will render here</div> -->
          <script src="../scripts/multiPieChart.js"></script>
      </div>

      <!-- Chart Option #2  -->
      <!-- <div class="mainpage-row-item">
        <label class="sun"><input onclick="interactivitySelectionMode('drill-down')" type="radio" name="mode">drill-down</label>
        <label class="sun"><input onclick="interactivitySelectionMode('multi-select')" type="radio" name="mode">multi-select</label>
        <label class="sun"><input onclick="interactivitySelectionMode('single-select')" type="radio" name="mode">single-select</label>
        <label class="sun"><input onclick="interactivitySelectionMode('none')" type="radio" name="mode" checked>none</label>
        <div id="container">
          <script src="https://cdn.anychart.com/releases/8.11.0/js/anychart-base.min.js?hcode=a0c21fc77e1449cc86299c5faa067dc4"></script>
          <script src="https://cdn.anychart.com/releases/8.11.0/js/anychart-sunburst.min.js?hcode=a0c21fc77e1449cc86299c5faa067dc4"></script>
          <script src="https://cdn.anychart.com/releases/8.11.0/js/anychart-exports.min.js?hcode=a0c21fc77e1449cc86299c5faa067dc4"></script>
          <script src="https://cdn.anychart.com/releases/8.11.0/js/anychart-ui.min.js?hcode=a0c21fc77e1449cc86299c5faa067dc4"></script>
          <script src="../scripts/sunBurstChart.js"></script>
        </div>
      </div> -->

      <!-- Chart Option #3  -->
      <!-- <div class="mainpage-row-item">
        <div id='myDiv'>
        <script src='https://cdn.plot.ly/plotly-2.18.2.min.js'></script>
          <script src='../scripts/testSunBurstChart.js'></script>
        </div>
      </div> -->
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




