<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Modal</title>
  <link rel="stylesheet" href="../styles/report.css">
  <script defer src="../scripts/report.js"></script>
</head>
<body>
  <button data-modal-target="#modal">Report</button>
  <div class="report-menu" id="modal">
    <div class="menu-header">
      <div class="title">Report</div>
    </div>
    <div class="menu-body">
      <div class="report">
        <div class="report-title">H&amp;S Report</div>
        <a href="../pdf/H&S-report.pdf" target="_blank">
          <button class="preview-btn">Preview</button>
        </a>
        <button class="download-btn" data-report-id="hs-report">Download</button>
      </div>
      <div class="report">
        <div class="report-title">ClimateSpace Report</div>
        <a href="../pdf/ClimateSpace-report.pdf" target="_blank">
          <button class="preview-btn">Preview</button>
        </a>
        <button class="download-btn" data-report-id="climate-report">Download</button>
      </div>
      <div class="report">
        <div class="report-title">Environmental Report</div>
        <a href="../pdf/Environmental-report.pdf" target="_blank">
          <button class="preview-btn">Preview</button>
        </a>
        <button class="download-btn" data-report-id="env-report">Download</button>
      </div>
    </div>    
  </div>
  <div id="overlay"></div>
  <script src="../scripts/download-report.js"></script>
</body>
</html>