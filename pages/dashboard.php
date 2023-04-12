<?php
require 'watermanTop.php';

?>


<script src="../scripts/charts.js"></script>
<script src="../scripts/editDashboard.js"></script>
<script src="../scripts/print.js"></script>

<?php include 'report.php'; ?>

<div id="mainpage">
  <div class="toolbar">
   <!-- <button id="print" class="configure-btn print-button" onclick="printReport()">Print Report</button> -->
    <button id="edit" class="configure-btn" onclick="edit()">Edit Dashbaord</button>
    <button id="editing" class="configure-btn" onclick="save()">Save</button>
    <button id="editing" class="configure-btn" onclick="addChart()">Add chart</button>
    <button id="editing" class="configure-btn" onclick="addComment()">Add comment</button>
    <button id="editing" class="configure-btn" onclick="addTitle()">Add Title</button>
  </div>
  <!-- GRIDSTACK RENDER DIV -->
  <div id="render" class="grid-stack">

  </div>
  <!-- <div class="abutton">
    <button onclick="buttonClickityClick()">+</button>
  </div> -->
</div>

<?php
require 'watermanBottom.php';
?>