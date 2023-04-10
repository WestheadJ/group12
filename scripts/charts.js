// https://www.freecodecamp.org/news/how-to-read-json-file-in-javascript/


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

function render(json) {
  // Get the render container
  var renderContainer = document.getElementById('render')

  var dashboardConfigs = JSON.parse(json[0].dashboard_data).configs

  // DEBUG
  // console.log(dashboardConfigs)

  dashboardConfigs.forEach(widget => {

    // DEBUG
    // console.log(widget)
    // console.log(widget.gs_h)

    let gridItem = document.createElement('div')
    gridItem.setAttribute('class', 'grid-stack-item')
    gridItem.setAttribute("id", widget.widget_id)
    gridItem.setAttribute("gs-h", widget.gs_h)
    gridItem.setAttribute("gs-w", widget.gs_w)

    // DEBUG
    // gridItem.style.border = "solid black 1px"
    // gridItem.style.backgroundColor = "gray"

    if (!widget.gs_x) {
      // LEFT EMPTY AS NEEDS TO PASS

    }
    else {
      gridItem.setAttribute("gs-x", widget.gs_x)

    }

    if (!widget.gs_y) {
      // LEFT EMPTY AS NEEDS TO PASS
    }
    else {
      gridItem.setAttribute("gs-y", widget.gs_y)

    }

    renderContainer.appendChild(gridItem)

    if (widget.content.graph_id) {
      let widgetDiv = document.getElementById(widget.widget_id)
      let canvas = document.createElement("canvas")
      canvas.setAttribute("id", `${widget.widget_id}-${widget.content.graph_id}`)
      widgetDiv.appendChild(canvas)

    }

    if (widget.content.comment) {
      let widgetDiv = document.getElementById(widget.widget_id)
      let comment = document.createElement("p")
      comment.setAttribute("id", `${widget.widget_id}-comment`)
      comment.innerText = widget.content.comment;
      widgetDiv.appendChild(comment)
    }

    if (widget.content.title) {
      let widgetDiv = document.getElementById(widget.widget_id)
      let title = document.createElement("h1")
      title.setAttribute("id", `${widget.widget_id}-title`)
      title.innerText = widget.content.title;
      widgetDiv.appendChild(title)
    }
  })

  dashboardConfigs.forEach(widget => {

    if (widget.content.graph_id) {
      var canvas = document.getElementById(`${widget.widget_id}-${widget.content.graph_id}`)
      fetch('../scripts/getGraph.php?graph_id=' + widget.content.graph_id)
        .then((res) => res.json())
        .then((responseData) => {

          // DEBUG:
          // console.log(responseData)
          graph_id = JSON.parse(responseData[0].graph_id)
          responseData = JSON.parse(responseData[0].graph_data)

          // DEBUG:
          // console.log(responseData)

          if (responseData.type === "gauge") {
            responseData.data.datasets[0].data = data
            responseData.data.datasets[0].value = value
            responseData.options.valueLabel.formatter = Math.round
          }
          else {
            responseData.data.datasets[0].data = data
          }

          var ctx = canvas.getContext('2d')
          graph = new Chart(ctx, responseData)
          return graph
        })
    }


  })
}
window.onload = () => {

  // --- Create the layout of the dashboard ---

  // Gets the config file using the JS Fetch API (It's a promise function)
  // Promises: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
  fetch("../scripts/getDashboard.php?dashboard_id=1")
    // Gets the data and converts it to a JSON object to work with
    .then(response => response.json())
    // Render function
    .then((json) => {
      render(json)
      GridStack.init();
    })



  // // --- Add the graphs to the dashboard --- 

  // // Gets the config file using the JS Fetch API
  // fetch("../configs/dashboards/dashboard.json")
  //   // Gets the data and converts it to a JSON object to work with
  //   .then(response => response.json())
  //   // Render function
  //   .then((json) => {
  //     renderGraphs(json)
  //   })

};