<?php
$file = '../uploads/report.pdf';

header('Content-Description: File Transfer');
header('Content-Type: application/octet-stream');
header('Content-Disposition: attachment; filename="'.basename($file).'"');
header('Expires: 0');
header('Cache-Control: must-revalidate');
header('Pragma: public');
header('Content-Length: ' . filesize($file));
ob_clean();
flush();
readfile($file);
exit;

//https://stackoverflow.com/questions/39745456/php-file-down-with-header
//The source I used to help me implement a pdf file download so that the user is able to download and save it to their file explorer. 
?>
