// var randomData = function () {
//     return [
//       randomScalingFactor(),
//       randomScalingFactor(),
//       randomScalingFactor(),
//       randomScalingFactor(),
//       randomScalingFactor(),
//       randomScalingFactor()
//     ];
//   };

//   var barData = randomData();

// function displayChart() {
//     var chartData = {
//         labels: ['Green', 'Amber', 'Red'],
//         datasets: [{
//             label: 'Bar Chart',
//             data: barData,
//             backgroundColor: ['green', 'orange', 'red'],
//             borderWidth: 1
//         }]
//     };
//     var chartOptions = {
//         scales: {
//             yAxes: [{
//                 ticks: {
//                     beginAtZero: true
//                 }
//             }]
//         }
//     };
//     var ctx = document.getElementById('myChart').getContext('2d');
//     var chart = new Chart(ctx, {
//         type: 'bar',
//         data: chartData,
//         options: chartOptions
//     });
// }

function insertAfter(referenceNode, newNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}

function buttonClickityClick(){
    var el = document.createElement("div");
    el.innerHTML = "test";
    var div = document.getElementById("row-1-item-1");
    insertAfter(div, el);
}