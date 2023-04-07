<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Report</title>
  <link rel="stylesheet" href="../styles/report.css">
</head>
<body>
  <div class="container">
    <button id="linkModal">Reports</button>
  </div>

  <div id="modal" class="offmodal">
    <div class="modal-container">
      <header>
        <h2>Reports</h2>
        <button id="printReport">Print Report</button>
        <button id="closeModal">Close</button>
      </header>
      <div class="modal-body">
        <table id="report-table"></table>
      </div>
    </div>
  </div>

  <script src="../scripts/report.js"></script>
</body>
</html>


