let graph;
let x = 1;
let graph_data;
let graph_data_raw;

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
  var input = document.getElementById('select-chart').value
  fetch('../configs/defaultGraphs/' + input + '.json')
    .then((response) => response.json())
    .then((responseData) => {
      fetch('../scripts/saveGraph.php', {
        method: "POST",
        body: JSON.stringify(responseData)
      })
        .then(res => res.json())
        .then(res => {
          console.log(res)
          // if (JSON.parse(res).status === 200) {
          //   fetch("../scripts/getDashboard.php?dashboard_id=1")
          //     .then(res => res.json())
          //     .then(json => {
          //       let dashboard = JSON.parse(json[0].dashboard_data)
          //       let tempConfigs = []
          //       dashboard.configs.forEach(widget => {
          //         if (widget.widget_id === widgetId) {
          //           widget.content.graph_id === graphId
          //         }
          //         tempConfigs.push(widget)
          //       })
          //       dashboard.configs = tempConfigs
          //       fetch("../scripts/saveWidget.php?dashboard_id=1", { method: "post", body: JSON.stringify(dashboard) })
          //         .then(res => res.json())
          //         .then(json => {
          //           console.log(json)
          //         })
          //     })
          // }
          // else {
          //   return alert("There was an error updating")
          // }
        })
    })
}

function chartChange(e) {
  console.log(e.target.value)
  graph.destroy()
  document.getElementById("graph").remove()
  let canvas = document.createElement("canvas")
  canvas.setAttribute("id", "graph")
  document.getElementById("graph-container").appendChild(canvas)
  getGraphData(e.target.value)
}