<button class="open-button" onclick="openForm()">Action Timeline</button>

<div class="form-popup" id="myForm">
    <form class="form-container">
        <script src="../scripts/historyChartFusion.js"></script>
        <div id="chart-container"></div>
            <button type="" class="btn timestamp">Timestamp</button>
            <button type="button" class="btn cancel1" onclick="closeForm()">Close</button>
    </form>
</div>
<script src="../scripts/popout.js"></script>

<!-- REFERENCE FOR CODE: Used the basis of this login form for the popout functionality and made it our own for this chart. -->
<!-- https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_popup_form -->