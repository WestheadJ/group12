document.getElementById('linkModal').addEventListener('click', function () {
  var newWindow = window.open('', '_blank');
  var htmlCode = `
  <html>
    <head>
      <title>Report</title>
      <link rel="stylesheet" href="../styles/report.css">
    </head>
    <body>
      <button id="printReport">Print Report</button>
      <table id="report-table"></table>
      <div id="modal" class="offmodal">
        <div class="modal-container">
          <header>
            <h2>Reports</h2>
            <button id="printReport">Print Report</button>
          </header>
          <div class="modal-body">
            <table id="report-table"></table>
          </div>
        </div>
      </div>
    </body>
  </html>
`;
  var reportTable = newWindow.document.getElementById('report-table');
  fetch('../configs/report/report.json')
    .then(response => response.json())
    .then(data => {
      var html = '';
      data.charts.forEach(chart => {
  //https://stackoverflow.com/questions/17120633/loop-through-each-html-table-column-and-get-the-data-using-jquery
  //The source I used to help me implement the forEach() method to loop through each chart in the report.json file
        html += '<tr><th colspan="2">' + chart.chartTitle + '</th></tr>';
        chart.tableData.forEach(table => {
          html += '<tr>';
          html += '<td>' + table.category + '</td>';
          html += '<td><span class="statusColor" style="background-color:' + table.statusColor + '"></td>';
          html += '</tr>';
        });
  //https://www.youtube.com/watch?v=eS-FVnhjvEQ
 // The source I used to help me display the graph data in a table. 
      });
      reportTable.innerHTML = html;
    });
  newWindow.document.getElementById('printReport').addEventListener('click', function() {
    newWindow.print();
  });
}, false);

  //https://www.w3schools.com/jsref/met_win_print.asp
  //The source I used to help me implement a print option for the report. 

