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
  // https://www.freecodecamp.org/news/how-to-read-json-file-in-javascript/w

  // Getting the gauge
  fetch('../configs/graphs/gauge.json')
    .then((response) => response.json())
    .then((json) =>{ 
    json.data.datasets[0].data=data
    json.data.datasets[0].value = value
    json.options.valueLabel.formatter = Math.round 

    // DEBUG 
    // console.log(json)
    // console.log("data:",json.data.datasets[0].data=data)
    // console.log("value",json.data.datasets[0].value = value)
    
    var ctx = document.getElementById('guageChart').getContext('2d');
    window.guageChart = new Chart(ctx, json);


    ctx = document.getElementById('guageChartR2').getContext('2d');
    window.guageChart = new Chart(ctx, json);
    

    ctx = document.getElementById('guageChartR4').getContext('2d');
    return window.guageChart = new Chart(ctx, json);
  });


  fetch('../configs/graphs/bar.json')
      .then((response) => response.json())
      .then((json) =>{ 
      
        // DEBUG
      // console.log(json)
      
      json.data.datasets[0].data = data

      var ctx = document.getElementById('barChartR2').getContext('2d');
      window.lineChart = new Chart(ctx, json);

      ctx = document.getElementById('barChartR3').getContext('2d');
      window.lineChart = new Chart(ctx, json);

      ctx = document.getElementById('barChart').getContext('2d');
      return window.lineChart = new Chart(ctx, json);
    });

    fetch('../configs/graphs/pie.json')
    .then((response)=>response.json())
    .then((json)=>{
      json.data.datasets[0].data=data

      var ctx = document.getElementById('pieChart').getContext('2d');
      window.lineChart = new Chart(ctx, json);var 
      
      ctx = document.getElementById('pieChartR2').getContext('2d');
      window.lineChart = new Chart(ctx, json);
  
      ctx = document.getElementById('pieChartR3').getContext('2d');
      return window.lineChart = new Chart(ctx, json);

    })

    fetch("../configs/graphs/line.json")
    .then(response=>response.json())
    .then((json)=>{
      json.data.datasets[0].data = data  
      
      var ctx = document.getElementById('lineChart').getContext('2d');
      return window.lineChart = new Chart(ctx, json);
    })



};