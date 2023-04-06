<head>
  <link rel="stylesheet" type="text/css" href="../styles/reportpopup.css">
</head>
<body>
<button class="my-custom-open-button" onclick="openForm()">Reports</button>

<div class="my-custom-form-popup" id="myNewForm">
  <form class="my-custom-form">
      <button class="close-button" onclick="closeForm()">Close</button>
      <div class="report">
        <div class="report-title">H&amp;S Report</div>
        <button class="preview-btn" onclick="window.open('../pdf/H&S-Report.pdf', '_blank')">Preview</button>
        <a href="../pdf/H&S-Report.pdf" download><button type="button" class="download-btn">Download</button></a>
      </div>
      <div class="report">
        <div class="report-title">ClimateSpace Report</div>
        <button class="preview-btn" onclick="window.open('../pdf/ClimateSpace-report.pdf', '_blank')">Preview</button>
        <a href="../pdf/ClimateSpace-Report.pdf" download><button type="button" class="download-btn">Download</button></a>     
      </div>
      <div class="report">
        <div class="report-title">Environmental Report</div>
        <button class="preview-btn" onclick="window.open('../pdf/Environmental-report.pdf', '_blank')">Preview</button>
        <a href="../pdf/Environmental-Report.pdf" download><button type="button" class="download-btn">Download</button></a>
      </div>
    </form>
  </div>

  <script src="../scripts/reportpopup.js"></script>
</body>




