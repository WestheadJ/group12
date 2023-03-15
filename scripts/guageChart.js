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

window.onload = async function () {
  fetch('../configs/graphs/guage.json')
    .then((response) => response.json())
    .then((json) =>{ 
    json.data.datasets[0].data=data
    json.data.datasets[0].value = value
    json.options.valueLabel.formatter = Math.round 

    // DEBUG 
    // console.log("data:",json.data.datasets[0].data=data)
    // console.log("value",json.data.datasets[0].value = value)
    
    var ctx = document.getElementById('guageChart').getContext('2d');
    return window.guageChart = new Chart(ctx, json);
  });


  fetch('../configs/graphs/bar.json')
      .then((response) => response.json())
      .then((json) =>{ 
      
        // DEBUG
      // console.log(json)
      
      json.data.datasets[0].data = data

      var ctx = document.getElementById('barChart').getContext('2d');
      return window.lineChart = new Chart(ctx, json);
    });
  
  // var ctx = document.getElementById('pieChart').getContext('2d');
  // window.lineChart = new Chart(ctx, config2);
  
  // var ctx = document.getElementById('lineChart').getContext('2d');
  // window.lineChart = new Chart(ctx, config3);
  
  // var ctx = document.getElementById('guageChartR2').getContext('2d');
  // window.guageChart = new Chart(ctx, gaugeConfigs);
  
  // var ctx = document.getElementById('barChartR2').getContext('2d');
  // window.lineChart = new Chart(ctx, barConfigs);
  
  // var ctx = document.getElementById('pieChartR2').getContext('2d');
  // window.lineChart = new Chart(ctx, config2);
  
  // var ctx = document.getElementById('barChartR3').getContext('2d');
  // window.lineChart = new Chart(ctx, barConfigs);
  
  // var ctx = document.getElementById('pieChartR3').getContext('2d');
  // window.lineChart = new Chart(ctx, config2);
  
  // var ctx = document.getElementById('guageChartR4').getContext('2d');
  // window.guageChart = new Chart(ctx, gaugeConfigs);
  
};

var config = {
  type: 'gauge',
  data: {
    //labels: ['Success', 'Warning', 'Warning', 'Error'],
    datasets: [{
      data: data,
      value: value,
      backgroundColor: ['green', 'orange', 'red'],
      borderWidth: 2
    }]
  },
  options: {
    responsive: true,
    title: {
      display: true,
      text: 'Gauge chart'
    },
    layout: {
      padding: {
        bottom: 30
      }
    },
    needle: {
      // Needle circle radius as the percentage of the chart area width
      radiusPercentage: 2,
      // Needle width as the percentage of the chart area width
      widthPercentage: 3.2,
      // Needle length as the percentage of the interval between inner radius (0%) and outer radius (100%) of the arc
      lengthPercentage: 80,
      // The color of the needle
      color: 'rgba(0, 0, 0, 1)'
    },
    valueLabel: {
      formatter: Math.round
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
