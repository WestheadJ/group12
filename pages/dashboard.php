 <!-- What we need
    Button to add chart -> chart select (select chart) user click update -> display chart type.
    Return to dashboard
    Display chart
-->

<?php require 'navbar.php' ?>
<script src="../scripts/addGraphBtn.js"></script>
<div id="mainpage">
  
  <div class="mainpage-row" id="row-1">
    <div class="mainpage-row-item" id="row-1-item-1">
      <canvas id="chart"></canvas>
    </div>

    <div class="mainpage-row-item">
      <div class="add-graph-button">
        <!-- <a href="chartSelect.php"> -->
          <button onclick="buttonClickityClick()">Add</button>
        <!-- </a> -->
      </div>
    </div>
  </div>
</div>