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
        <script src="https://cdn.fusioncharts.com/fusioncharts/latest/fusioncharts.js"></script>
        <script src="https://cdn.fusioncharts.com/fusioncharts/latest/themes/fusioncharts.theme.fusion.js"></script>
        <div id="chart-container">FusionCharts will render here</div>
        <script src="../scripts/multiPieChart.js"></script>
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