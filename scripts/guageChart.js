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
  var ctx = document.getElementById('guageChart').getContext('2d');
  window.guageChart = new Chart(ctx, config);
  
  var ctx = document.getElementById('barChart').getContext('2d');
  window.lineChart = new Chart(ctx, config1);
  
  var ctx = document.getElementById('pieChart').getContext('2d');
  window.lineChart = new Chart(ctx, config2);
  
  var ctx = document.getElementById('lineChart').getContext('2d');
  window.lineChart = new Chart(ctx, config3);
  
  var ctx = document.getElementById('guageChartR2').getContext('2d');
  window.guageChart = new Chart(ctx, config);
  
  var ctx = document.getElementById('barChartR2').getContext('2d');
  window.lineChart = new Chart(ctx, config1);
  
  var ctx = document.getElementById('pieChartR2').getContext('2d');
  window.lineChart = new Chart(ctx, config2);
  
  var ctx = document.getElementById('barChartR3').getContext('2d');
  window.lineChart = new Chart(ctx, config1);
  
  var ctx = document.getElementById('pieChartR3').getContext('2d');
  window.lineChart = new Chart(ctx, config2);
  
  var ctx = document.getElementById('guageChartR4').getContext('2d');
  window.guageChart = new Chart(ctx, config);
  
  
  
};

var config;

fetch('../graphs/guage.json')
    .then((response) => response.json())
    .then((json) =>{ 
    console.log(json)
    config = json
    config.value = value});

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


var config2 = {
  type: 'pie',
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

var config3 = {
  type: 'line',
  data: {
    labels: ['Green', 'Amber', 'Red'],
    datasets: [{
      label: 'Chart',
      data: data,
      fill: false,
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
