let graph;

function changeGraph() {
  var input = document.getElementById('select-chart').value
  let canvas = document.getElementById("graph")

  fetch('../configs/defaultGraphs/' + input + '.json')
    .then((response) => response.json())
    .then((data) => {
      console.log(data); 
      graph_data = JSON.parse(data)
      var ctx = canvas.getContext('2d')
      graph = new Chart(ctx, graph_data)
    })

}

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