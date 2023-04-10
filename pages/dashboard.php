<?php
require 'watermanTop.php';

?>

<script src="../scripts/charts.js"></script>
<script src="../scripts/editToggle.js"></script>

<div id="mainpage">
  <div class="toolbar">
    <button class="configure-btn" onclick="editToggle()">Configure</button>
  </div>
  <div id="render" class="grid-stack">

  </div>
  <!-- <div class="abutton">
    <button onclick="buttonClickityClick()">+</button>
  </div> -->
</div>

<?php
require 'watermanBottom.php';
?>