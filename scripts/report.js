document.getElementById('linkModal').addEventListener('click', function () {
  var newWindow = window.open('', '_blank');
  newWindow.document.write('<html><head><title>Report</title><link rel="stylesheet" href="../styles/report.css"></head><body><button id="printReport">Print Report</button><table id="report-table"></table><div id="modal" class="offmodal"><div class="modal-container"><header><h2>Reports</h2><button id="printReport">Print Report</button></header><div class="modal-body"><table id="report-table"></table></div></div></div></body></html>');
  var reportTable = newWindow.document.getElementById('report-table');
  fetch('../configs/report/report.json')
    .then(response => response.json())
    .then(data => {
      var html = '';
      data.charts.forEach(chart => {
        html += '<tr><th colspan="2">' + chart.chartTitle + '</th></tr>';
        chart.tableData.forEach(table => {
          html += '<tr>';
          html += '<td>' + table.category + '</td>';
          html += '<td><span class="statusColor" style="background-color:' + table.statusColor + '"></td>';
          html += '</tr>';
        });
      });
      reportTable.innerHTML = html;
    });
  newWindow.document.getElementById('printReport').addEventListener('click', function() {
    newWindow.print();
  });
}, false);

