var randomScalingFactor = function () {
    return Math.round(Math.random() * 100);
  };
  
  var randomData = function () {
    return [
      randomScalingFactor(),
      randomScalingFactor(),
      randomScalingFactor()
    ];
  };
  
  var randomValue = function (data) {
    return Math.max.apply(null, data) * Math.random();
  };
  
  var data = randomData();
  var value = randomValue(data);
  
  
  window.onload = function () {
  
    var ctx = document.getElementById('editBarChart').getContext('2d');
    window.lineChart = new Chart(ctx, config1);
    
    
    
  };
  
  
  var config1 = {
    type: 'bar',
    data: {
      labels: ['Green', 'Amber', 'Red'],
      datasets: [{
        label: 'Chart',
        data: data,
        backgroundColor: ['green', 'orange', 'red'],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  };
  
  