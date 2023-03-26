function downloadReport(reportName) {
  var reportFilePath = '../pdf/' + reportName + '.pdf'; // set the file path of the report
  var downloadLink = document.createElement('a'); // create an anchor element
  downloadLink.href = reportFilePath; // set the href attribute of the anchor element to the report file path
  downloadLink.download = reportName + '.pdf'; // set the download attribute of the anchor element to the report name
  downloadLink.click(); // trigger a click event on the anchor element to prompt the user to download the file
}
