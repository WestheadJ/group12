let type;

window.onload = () => {
  let params = window.location.search;
  console.log(params)
  if (params.length == 0 || params.split("=")[0] !== "?widget_id") {
    return window.location.replace("dashboard.php")
  }
  else {
    const content = params.split("?")[1].split("&")[1].split('=')[1]
    const widget_id = params.split('?')[1].split("&")[0].split('=')[1]
    let graphEdit = document.getElementById("graph-edit")
    let commentEdit = document.getElementById("comment-edit")
    let titleEdit = document.getElementById("title-edit")

    if (content === "comment") {
      titleEdit.remove()
      graphEdit.remove()
      console.log("Removing title and graph")
    }
    else if (content === "title") {
      commentEdit.remove()
      graphEdit.remove()
      console.log("Removing comment and graph")
    }
    else {
      commentEdit.remove()
      titleEdit.remove()

    }
    fetch("../scripts/getDashboard.php?dashboard_id=1")
      // Gets the data and converts it to a JSON object to work with
      .then(response => response.json())
      // Render function
      .then((json) => {
        let dashboard = JSON.parse(json[0].dashboard_data)
        dashboard.configs.forEach(widget => {
          console.log(widget)
          if (widget.widget_id == widget_id)
            if (content === "title") {
              document.getElementById("title-preview").innerText = widget.content.title
              document.getElementById("title-input").value = widget.content.title
            }
            else if (content == "comment") {
              document.getElementById("comment-preview").innerText = widget.content.comment
              document.getElementById("comment-input") = widget.content.comment
            }
            else {
              getGraphData(content)
            }
        });

      })
  }
}

function saveComment(e) {
  e.preventDefault()
}

function saveTitle(e) {
  e.preventDefault()
}

let graph;
let urlData;

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

function getGraphData(graph_id) {
  return fetch('../scripts/getGraph.php?graph_id=' + graph_id)
    .then((response) => response.json())
    .then((responseData) => {


      // DEBUG:
      // console.log(responseData)
      graph_id = JSON.parse(responseData[0].graph_id)
      responseData = JSON.parse(responseData[0].graph_data)

      // DEBUG:
      console.log(responseData)

      let graphType = responseData.type

      if (graphType === "gauge") {
        responseData.data.datasets[0].data = randomDataVar
        responseData.data.datasets[0].value = randomValueVar
        responseData.options.valueLabel.formatter = Math.round

        document.getElementById("x-axis").remove()
        document.getElementById("y-axis").remove()
        document.getElementById("x-axis-label").remove()
        document.getElementById("y-axis-label").remove()

      }
      else {
        responseData.data.datasets[0].data = randomDataVar
      }
      document.getElementById("graph-title").value = responseData.options.title.text
      if (graphType !== "gauge") {
        if ('xAxes' in responseData.options.scales) { document.getElementById("x-axis").value = responseData.options.scales.xAxes[0].scaleLabel.labelString }

        if ('yAxes' in responseData.options.scales) {
          if ('scaleLabel' in responseData.options.scales.yAxes[0]) {
            document.getElementById("y-axis").value = responseData.options.scales.yAxes[0].scaleLabel.labelString
          }
        }
      }


      let canvas = document.getElementById("graph")
      var ctx = canvas.getContext('2d')
      graph = new Chart(ctx, responseData)
      return graph
    })
}

// https://stackoverflow.com/questions/7056669/how-to-prevent-default-event-handling-in-an-onclick-method
function updatePreview(id) {
  let input = document.getElementById(id).value

  switch (id) {
    case "graph-title":
      graph.options.title.text = input
      break;
    case "x-axis":
      graph.options.scales.xAxes[0].scaleLabel.labelString = input
      graph.options.scales.xAxes[0].scaleLabel.display = true
      break;
    case "y-axis":
      graph.options.scales.yAxes[0].scaleLabel.labelString = input
      graph.options.scales.yAxes[0].scaleLabel.display = true
      break;
  }
  graph.update()
}

function saveGraph(e) {
  e.preventDefault();
  return fetch('../scripts/getGraph.php?graph_id=' + graph_id)
    .then((response) => response.json())
    .then((responseData) => {
      let json = JSON.parse(responseData[0].graph_data)
      let title = document.getElementById('graph-title').value
      let xAxis = document.getElementById('x-axis').value
      let yAxis = document.getElementById('y-axis').value
      json.options.title.text = title
      json.options.scales.xAxes[0].scaleLabel.labelString = xAxis
      json.options.scales.yAxes[0].scaleLabel.labelString = yAxis
      fetch('../scripts/saveGraph.php?graph_id=' + graph_id, {
        method: "POST",
        body: JSON.stringify(json)
      })
        .then(res => res.json())
        .then(res => {
          console.log(res)
          if (JSON.parse(res).status === 200) {
            return window.location.replace("dashboard.php")
          }
          else {
            return alert("There was an error updating")
          }
        })
    })
}