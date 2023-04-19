
let graph_data;
let graph_data_raw;
let graph;
let content;

window.onload = () => {
  let params = window.location.search;
  console.log(params)
  if (params.length == 0 || params.split("=")[0] !== "?widget_id") {
    return window.location.replace("dashboard.php")
  }
  else {
    content = params.split("?")[1].split("&")[1].split('=')[1]

    widgetId = params.split('?')[1].split("&")[0].split('=')[1]
    console.log(widgetId);

    getGraphData(content)
  }
}

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

function getGraphData(graphId) {
  return fetch('../scripts/getGraph.php?graph_id=' + graphId)
    .then((response) => response.json())
    .then((data) => {

      graph_data = JSON.parse(data[0].graph_data)
      graph_data_raw = JSON.parse(data[0].graph_data)
      let graphType = graph_data.type
      console.log(graph_data)

      document.getElementById("graph-title").value = graph_data.options.title.text
      if (graphType === "gauge") {
        graph_data.datasets[0].data = randomDataVar
        graph_data.datasets[0].value = randomValueVar
        graph_data.options.valueLabel.formatter = Math.round

        document.getElementById("x-axis").remove()
        document.getElementById("y-axis").remove()
        document.getElementById("x-axis-label").remove()
        document.getElementById("y-axis-label").remove()

      }
      else {
        graph_data.data.datasets[0].data = randomDataVar
        document.getElementById("x-axis").value = graph_data.options.scales.xAxes[0].scaleLabel.labelString
        document.getElementById("y-axis").value = graph_data.options.scales.yAxes[0].scaleLabel.labelString
      }
      let canvas = document.getElementById("graph")
      var ctx = canvas.getContext('2d')
      graph = new Chart(ctx, graph_data)  
      console.log(graph_data_raw)
      console.log(graph_data)
    })

}

// REFERENCE FOR CODE: https://stackoverflow.com/questions/7056669/how-to-prevent-default-event-handling-in-an-onclick-method
function updatePreview(id) {
  let input = document.getElementById(id).value

  switch (id) {
    case "graph-title":
      graph_data.options.title.text = input
      break;
    case "x-axis":
      graph_data.options.scales.xAxes[0].scaleLabel.labelString = input
      graph_data.options.scales.xAxes[0].scaleLabel.display = true
      break;
    case "y-axis":
      graph_data.options.scales.yAxes[0].scaleLabel.labelString = input
      graph_data.options.scales.yAxes[0].scaleLabel.display = true
      break;
  }
  graph.update()
}

function saveGraph(e) {
  e.preventDefault();

  graph_data_raw.options.scales.xAxes[0].scaleLabel.labelString = graph_data.options.scales.xAxes[0].scaleLabel.labelString
  graph_data_raw.options.scales.yAxes[0].scaleLabel.labelString = graph_data.options.scales.yAxes[0].scaleLabel.labelString
  graph_data_raw.options.title.text = graph_data.options.title.text
  
  fetch('../scripts/saveGraph.php?graph_id=' + content, {
    method: "POST",
    body: JSON.stringify(graph_data_raw)
  })

  window.location.replace = "../pages/dashboard.php?edit=true";
}