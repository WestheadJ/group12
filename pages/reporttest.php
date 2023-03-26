<button class="open-button " onclick="openForm()">Reports</button>

<div class="form-popup" id="myForm">
  <form class="form-container">
    <div class="report">
      <div class="report-title">H&amp;S Report</div>
      <button class="preview-btn" onclick="window.open('../pdf/H&S-Report.pdf', '_blank')">Preview</button>
      <button class="download-btn" onclick="downloadReport('hs-report')">Download</button>
    </div>
    <div class="report">
      <div class="report-title">ClimateSpace Report</div>
      <button class="preview-btn" onclick="window.open('../pdf/ClimateSpace-report.pdf', '_blank')">Preview</button>
      <button class="download-btn" onclick="downloadReport('climate-report')">Download</button>
    </div>
    <div class="report">
      <div class="report-title">Environmental Report</div>
      <button class="preview-btn" onclick="window.open('../pdf/Environmental-report.pdf', '_blank')">Preview</button>
      <button class="download-btn" onclick="downloadReport('env-report')">Download</button>
    </div>
    <div id="chart-container"></div>
  </form>
</div>

<script src="../scripts/download-report.js"></script>
<script src="../scripts/reportpopup.js"></script>


