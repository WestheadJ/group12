<?php
require 'watermanTop.php';
?>

<link rel="stylesheet" href="../styles/dashboard.css">
<link rel="stylesheet" href="../styles/watermanDash.css">
<script src="../scripts/charts.js"></script>
<script src="../scripts/editDashboard.js"></script>

<?php 

include 'popout.php';
include 'report.php';

?>
</div>
</div>
<div id="mainpage">
  <div class="toolbar">
    <button id="edit" class="configure-btn" onclick="edit()">Edit Dashboard</button>
    <button id="editing" class="configure-btn" onclick="save()">Save</button>
    <button id="editing" class="configure-btn" onclick="addChart()">Add chart</button>
    <button id="editing" class="configure-btn" onclick="addComment()">Add comment</button>
    <button id="editing" class="configure-btn" onclick="addTitle()">Add Title</button>
    
  </div>
  <div class="grid-stack-item-content">

    <div id="render" class="grid-stack">

    </div>

  </div>

  <?php
  require 'watermanBottom.php';
  ?>