<?php require 'index.php';?>
<nav class="nav">
  <div id="nav-brand">
    <h1>Waterman Group</h1>
  </div>
  <div id="nav-departments">
    <!-- <h4>Enviromental</h4>
    <h4>Climate Space</h4>
    <h4>H&S</h4> -->
    <a <?php echo $x ?> href="overview.php">
      <button class="nav-item">Overview</button>
    </a>
    <a <?php echo $y ?> href="dashboard.php">
      <button class="nav-item" >Dashboard</button>
    </a>
    <a href="fancyPie.php">
      <button class="nav-item" >Example</button>
    </a>
  </div>
  
  </div>
  
</nav>
<div class="nav-content">
  </div>
</body>