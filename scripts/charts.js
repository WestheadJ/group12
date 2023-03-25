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


window.onload = () => {

  // --- Create the layout of the dashboard ---

  // Gets the config file using the JS Fetch API (It's a promise function)
  // Promises: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
  fetch("../configs/dashboards/dashboard.json")
  // Gets the data and converts it to a JSON object to work with
  .then(response=>response.json())
  // Render function
  .then((json)=>{

    var grid = document.getElementById("render")
    var render = document.createElement("div") 
    render.setAttribute("class","grid-stack")

    json.configs.forEach(item=>{

      var stack = item.stack.toString()
      stack = stack.replace(","," ")
      console.log(stack)

      var graphData = item.graphData

      graphData = JSON.stringify(graphData)
      console.log(graphData)

   
      
      var widget = document.createElement("div")
      widget.setAttribute("class","grid-stack-item")
      widget.setAttribute("gs-w","3")

            // widget.createElement("h4")
      //widget.textContent(graphData)

      
      
      grid.appendChild(render)
      
      render.appendChild(widget)

      
      // var graph = document.getElementById("graph")

      // var graphItem = document.createElement("h4")
      // graphItem.textContent = graphData
      // graph.appendChild(graphItem)

    })
  })
}

