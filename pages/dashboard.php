 <!-- What we need
    Button to add chart -> chart select (select chart) user click update -> display chart type.
    Return to dashboard
    Display chart
-->

<script src="../scripts/addGraphBtn.js"></script>

<?php require 'navbar.php' ?>

<!-- Maisha is this not for chartSelect, if it is put in chartSelect.php -->

<!-- <div class="filter-box">
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
</div> -->

<div class="mainpage">
  <div class="mainpage-row">
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