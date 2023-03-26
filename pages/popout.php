<button class="open-button" onclick="openForm()">Action Timeline</button>

<div class="form-popup" id="myForm">
  <form action="/action_page.php" class="form-container">
    <script src="../scripts/historyChartFusion.js"></script>
    <div id="chart-container"></div>
    <button type="button" class="btn cancel" onclick="closeForm()">Close</button>
  </form>
</div>
<script src="../scripts/popout.js"></script>

<!-- REFERENCE FOR CODE -->
<!-- https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_popup_form -->