<!-- What we need 
    Button to add chart -> chart select (select chart) user click update -> display chart type.
    Return to dashboard
    Display chart
-->

<?php require 'navbar.php' ?>
<div class="mainpage">
  <div class="mainpage-content">
    <script src="../scripts/guageChart.js"></script>
    <div id="canvas-holder" style="width:50%">
      
    <canvas id="chart"></canvas>
    
  </div>
  <div id=" graphButton">
    <script src="../scripts/addGraphBtn.js"></script>
    <button class = "button-blue" onclick="displayChart()">Add Graph</button>
    <div id="canvas-holder" style="width:50%">
      <canvas id="myChart"></canvas>
    </div>
  </div>
</body>

</html>

<script src="../scripts/addGraphBtn.js"></script>

<a href="dashboard.php">Return to dashboard</a>
</div>
</div>
</body>

</html>