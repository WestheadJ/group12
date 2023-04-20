let graph;
let x = 1;
let graph_data;
let data;
let graphID;

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

 fetch('../scripts/getGraphCount.php')
  .then(res => res.json())
  .then(res => {
    graphID = res[0].x
    graphID = parseInt(graphID) + 1 
    console.log("Graph ID: " + graphID)
  })

  fetch('../scripts/getDashboard.php')
    .then(res => res.json())
    .then(res => {
      data = JSON.parse(res[0].dashboard_data)
      let length = data.configs.length
      console.log("length ID: " + length)
      data.configs.push({
        widget_id: length+1,
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
 
  var input = document.getElementById('select-chart').value
  fetch('../configs/defaultGraphs/' + input + '.json')
    .then((response) => response.json())
    .then((responseData) => {
      console.log(JSON.stringify(responseData))
      console.log(graphID)
      fetch('../scripts/saveGraph.php?id='+ graphID, {
        method: "POST",
        body: JSON.stringify(responseData)
      })
        .then(res => res.json())
        .then(res => {
          console.log(res)
        })
    })
}

