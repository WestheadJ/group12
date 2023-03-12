 <!-- What we need
    Button to add chart -> chart select (select chart) user click update -> display chart type.
    Return to dashboard
    Display chart
-->

<?php require 'navbar.php' ?>
<div class="filter-box">
  <select>
    <option value="option1">Option 1</option>
    <option value="option2">Option 2</option>
    <option value="option3">Option 3</option>
  </select>
  <select>
    <option value="option1">Option 1</option>
    <option value="option2">Option 2</option>
    <option value="option3">Option 3</option>
  </select>
  <select>
    <option value="option1">Option 1</option>
    <option value="option2">Option 2</option>
    <option value="option3">Option 3</option>
  </select>
</div>
<div class="mainpage">
  <div class="mainpage-row">
    <div class="mainpage-item">
      <script src="../scripts/guageChart.js"></script>
      <div id="canvas-holder">
        <canvas id="chart"></canvas>
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