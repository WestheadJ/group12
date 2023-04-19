let graph;
let x = 1;
let graph_data;
let graph_data_raw;
let data;
let graphID;
let widgetID;

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

var randomDataVar = randomData();
var randomValueVar = randomValue(randomDataVar);

function changeGraph() {
  var input = document.getElementById('select-chart').value
  let canvas = document.getElementById("graph")

  fetch('../configs/defaultGraphs/' + input + '.json')
    .then((response) => response.json())
    .then((graph_data) => {
      let graphType = graph_data.type;
      if (graphType === "gauge" || graphType === "pie") {
        if (graphType === "gauge") {
          graph_data.data.datasets[0].data = randomDataVar
          graph_data.data.datasets[0].value = randomValueVar
          graph_data.options.valueLabel.formatter = Math.round
        }
        if (graphType === "pie") {
          graph_data.data.datasets[0].data = randomDataVar
        }
      }
      else {
        graph_data.data.datasets[0].data = randomDataVar
      }
      if (x === 0) {
        graph.destroy()
      }
      var ctx = canvas.getContext('2d')
      graph = new Chart(ctx, graph_data)
      x = 0
      return graph_data
    })
}

function saveGraph(e) {
 e.preventDefault();
  widgetID = document.querySelectorAll('grid-stack-items').length
  widgetID += 1;
  var input = document.getElementById('select-chart').value
  fetch('../configs/defaultGraphs/' + input + '.json')
    .then((response) => response.json())
    .then((responseData) => {
      console.log(JSON.stringify(responseData))
      fetch('../scripts/saveWidget.php?id='+widgetID, {
        method: "POST",
        body: JSON.stringify(responseData)
      })
        .then(res => res.json())
        .then(res => {
          console.log(res)
        })
    })

  getDash()
}

function getDash() {
  fetch('../scripts/getGraphCount.php')
  .then(res => res.json())
  .then(res => {
    graphID = res[0].x;
  })

  fetch('../scripts/getDashboard.php')
    .then(res => res.json())
    .then(res => {
      data = JSON.parse(res[0].dashboard_data)
      data.configs.push({
        widget_id: widgetID,
        content: graphID
      })
      fetch('../scripts/saveDashboard.php', {
        method: "POST",
        body: data = JSON.stringify(data)
      })
        .then(res => res.json())
        .then(res => {
          console.log(res)
        })
        
    })
}