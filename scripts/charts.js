// https://www.freecodecamp.org/news/how-to-read-json-file-in-javascript/

const fs = require("fs")
// create and load it all from JSON above
document.querySelector('#saved').value = JSON.stringify(options);
let grid = GridStack.addGrid(document.querySelector('.container-fluid'), options);

function addWidget() {
  grid.addWidget({ x: 0, y: 100, content: "new item" });
}

function save(content = true, full = true) {
  options = grid?.save(content, full);
  console.log(options);
  const jsonString = JSON.stringify(optoins).fs.writeFile('../configs/dashboards/stack.json', jsonString, err => {
    if (err) {
      console.log('Error writing file', err)
    } else {
      console.log('Successfully wrote file')
    }
  })
}

function load(full = true) {
  fs.readFile("../configs/dashboards/stack.json", (err, jsonString) => {
    if (err) {
      console.log("File read failed:", err);
      return;
    }
    console.log("File data:", jsonString);
    grid.load(jsonString);
  });
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

var data = randomData();
var value = randomValue(data);


window.onload = () => {

  t / Reference / Global_Objects / Promise
  fetch("../configs/dashboards/dashboard.json")

    // TOMS' CODE:
    // var grid = document.getElementById("render")
    // var render = document.createElement("div") 
    // render.setAttribute("class","grid-stack")

    // JAMES' CODE:
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

      // var stack = item.stack.toString()
      // stack = stack.replace(","," ")
      // console.log(stack)

      // var graphData = item.graphData

      // graphData = JSON.stringify(graphData)
      // console.log(graphData)

   
      
      // var widget = document.createElement("div")
      // widget.setAttribute("class","grid-stack-item")
      // widget.setAttribute("gs-w","3")

      //       // widget.createElement("h4")
      // //widget.textContent(graphData)

      // var content = document.createElement("div") 
      // content.setAttribute("class","grid-stack-item-content")
      // content.textContent = graphData

      
      // TOMS' CODE
      // grid.appendChild(render)
      
      // render.appendChild(widget)

      // widget.appendChild(content)

      
      // var graph = document.getElementById("graph")

      // var graphItem = document.createElement("h4")
      // graphItem.textContent = graphData
      // graph.appendChild(graphItem)

    })
    GridStack.init();

  }




