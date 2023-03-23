<?php
$pdf_file = '../uploads/report.pdf';
header('Content-type: application/pdf');
readfile($pdf_file);
//https://stackoverflow.com/questions/20080341/correct-php-headers-for-pdf-file-download
//The source I used to help me implement a pdf file download so that the user is able to view the report. 
?>