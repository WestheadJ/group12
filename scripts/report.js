document.addEventListener("DOMContentLoaded", function () {

  var modal = document.getElementById('modal');
  var reportTable = document.getElementById('report-table');
  var printButton = document.getElementById('printReport');
  var closeButton = document.getElementById('closeModal');

  document.getElementById('linkModal').addEventListener('click', function () {
    modal.classList.remove('offmodal');
    modal.classList.add('onmodal');

    fetch('../configs//report/report.json')
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
 //https://www.youtube.com/watch?v=eS-FVnhjvEQ
 // The source I used to help me display the graph data in a table. 
          });
        });
        reportTable.innerHTML = html;
      });

  }, false);

  printButton.addEventListener('click', function () {
    window.print();
  //https://www.w3schools.com/jsref/met_win_print.asp
  //The source I used to help me implement a print option for the report. 
  });

  closeButton.addEventListener('click', function () {
    modal.classList.remove('onmodal');
    modal.classList.add('offmodal');
//https://github.com/ArslanAmeer/Ui-Component-Basic-JS-PopUp-Modal/blob/master/source/js/script.js
//The source I used to help me close and open the modal box. 
  });

});

