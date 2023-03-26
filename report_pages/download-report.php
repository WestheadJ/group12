<?php
// Get the report file based on the report ID
$reportId = $_GET['report'];
$reportFile = '';
switch ($reportId) {
  case 'hs-report':
    $reportFile = 'pdf/H&S-report.pdf';
    break;
  case 'climate-report':
    $reportFile = 'pdf/ClimateSpace-report.pdf';
    break;
  case 'env-report':
    $reportFile = 'pdf/Environmental-report.pdf';
    break;
}

// Set the headers to force the download of the file
header('Content-Type: application/octet-stream');
header('Content-Disposition: attachment; filename="' . basename($reportFile) . '"');
header('Content-Length: ' . filesize($reportFile));

// Output the file content
readfile($reportFile);
?>
