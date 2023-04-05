let graph;
let urlData;
let graph_id;
window.onload = () => {
  let params = window.location.search;
  if (params.length == 0 || params.split("=")[0] != "?graph_id") {
    return window.location.replace("dashboard.php")
  }
  else {
    graph_id = params.split("?")[1].split("&")[0].split('=')[1]
    getGraphData()
  }
}

var randomDataVar = randomData();
var randomValueVar = randomValue(randomDataVar);

function getGraphData() {
  return fetch('../scripts/getGraph.php?graph_id=' + graph_id)
    .then((response) => response.json())
    .then((responseData) => {

      // DEBUG:
      // console.log(responseData)
      graph_id = JSON.parse(responseData[0].graph_id)
      responseData = JSON.parse(responseData[0].graph_data)

      // DEBUG:
      // console.log(responseData)

      let graphType = responseData.type

      if (graphType === "gauge") {
        responseData.data.datasets[0].data = randomDataVar
        responseData.data.datasets[0].value = randomValueVar
        responseData.options.valueLabel.formatter = Math.round
      }
      else {
        responseData.data.datasets[0].data = randomDataVar
      }

      let canvas = document.getElementById("edit-bar-chart")
      var ctx = canvas.getContext('2d')
      graph = new Chart(ctx, responseData)
      return graph
    })
}

// https://stackoverflow.com/questions/7056669/how-to-prevent-default-event-handling-in-an-onclick-method
function updatePreview() {
  let currentTitle = document.getElementById('graph-title').value
  graph.options.title.text = currentTitle
  graph.update()
}

function save(e) {
  e.preventDefault();
  fetch("../scripts/saveGraph.php").then(res => console.log(res))
}