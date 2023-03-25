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

    var render = document.getElementById("render")
    var gridstack = document.createElement("div") 
    gridstack.setAttribute("class","grid-stack")

    render.appendChild(gridstack)

    json.configs.forEach(item=>{
      console.log(item)
      let gridItem = document.createElement('div')
      gridItem.setAttribute('class','grid-stack-item')
      gridItem.setAttribute("gs-w",item.stack[0].gs_w)
      gridItem.setAttribute("gs-h",item.stack[0].gs_h)
      gridstack.appendChild(gridItem)

      let canvas = document.createElement('canvas')
      canvas.setAttribute('id',item.graph_id)
      gridItem.appendChild(canvas)
      
      let ctx = document.getElementById(item.graph_id).getContext('2d');
      window.lineChart = new Chart(ctx, item.graph_data);

    })
    GridStack.init();

  })
}



