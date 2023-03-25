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

function renderRowsAndColumns(json){
  // Get the render container
  var renderContainer = document.getElementById('render')
    
  // *For each row* in the dashboard ->  
  json.configs.forEach(row=>{
    
    // DEBUG
    // console.log("This is row:",row.rowID.toString())

    // Gets the rowID (Converts to string as in the JSON it is an int)
    var rowID = row.rowID.toString()
    
    // Ready a div to become a row
    var rowEl = document.createElement("div")
    
    // Give it a class and an id
    rowEl.setAttribute("class","mainpage-row")
    rowEl.setAttribute("id","row-id-"+rowID)
    
    // Add div to the container
    renderContainer.appendChild(rowEl)
    
    // *For each column* in the row ->
    row.columns.forEach(column=>{
      
      // DEBUGS
      // console.log(column)
      // console.log("This is column",column.colID.toString(),"of row",rowID )
      // console.log("GraphID =",column.graphID)
      
      // Get the column ID (Needs converting to a string because it's an int)
      var colID = column.colID.toString()

      // Get the current rows div
      var insertRowEl = document.getElementById("row-id-"+rowID)
      


      var columnEl = document.createElement("div")
      columnEl.setAttribute("class","mainpage-row-item-container")
      columnEl.setAttribute("id","container-row-id-"+rowID+"-col-id-"+colID)

      insertRowEl.appendChild(columnEl)

      var container = document.getElementById("container-row-id-"+rowID+"-col-id-"+colID)

      var canvasEl = document.createElement("canvas")
            
      // Give prepares canvas a class and ID
      canvasEl.setAttribute("class","mainpage-row-item")
      canvasEl.setAttribute("id","row-id-"+rowID+"-col-id-"+colID)
      
      // Add to the row
      container.appendChild(canvasEl)

      var containerLink = document.createElement("a")

      containerLink.setAttribute('href','editGraph.php?graph_id='+column.graphID)  ;
      containerLink.innerHTML = 'Edit';

      containerLink.setAttribute("class","edit-graph")
      containerLink.setAttribute("id","row-id-"+rowID+"-col-id-"+colID)

      container.appendChild(containerLink)

    })
  })
}

function renderGraphs(json){
  // *For each row* in the dashboard ->  
  json.configs.forEach(row=>{
      
    // DEBUG:
    // console.log("This is row:",row.rowID.toString())

    // Get the rowID
    var rowID = row.rowID.toString()
      
    // *For each column* in the row ->
    row.columns.forEach(column=>{
        
      // DEBUGS
      // console.log(column)
      // console.log("This is column",column.colID.toString(),"of row",rowID )
      // console.log("GraphID =",column.graphID)
        
      // Get the column ID
      var colID = column.colID.toString()

      // Get the canvas element using it's rowID and colID
      var canvas  = document.getElementById("row-id-"+rowID+"-col-id-"+colID)

      // If the graphs ID is gauge get the gauge data (This is because the gauge data has the value section)
      if(column.graphID==="gauge"){

        // Get the graphs config using JS Fetch API
        fetch('../configs/graphs/gauge.json')
        // Gets the data and converts it to a JSON object to work with
        .then((response) => response.json())
        // Render function
        .then((gaugeData) =>{ 
          // Prepare the configs for the graphs
          gaugeData.data.datasets[0].data=data
          gaugeData.data.datasets[0].value = value
          gaugeData.options.valueLabel.formatter = Math.round 

          // DEBUG 
          // console.log()
          // console.log("data:",gaugeData.data.datasets[0].data=data)
          // console.log("value",gaugeData.data.datasets[0].value = value)

          // Render the graph
          var ctx = canvas.getContext('2d');
          return window.guageChart = new Chart(ctx, gaugeData);
        })
      }
      else{
        // Get the graphs config using JS Fetch API
        fetch(`../configs/graphs/${column.graphID}.json`)
        // Gets the data and converts it to a JSON object to work with
        .then(response=>response.json())
        // Render function
        .then(graphData=>{
          // Prepare the configs for the graphs
          graphData.data.datasets[0].data = data
          
          // Render the graph
          var ctx = canvas.getContext('2d');
          return window.graph = new Chart(ctx, graphData)
        })
      }
      
      })
    })
}


window.onload = () => {

  // --- Create the layout of the dashboard ---

  // Gets the config file using the JS Fetch API (It's a promise function)
  // Promises: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
  fetch("../configs/dashboards/dashboard.json")
  // Gets the data and converts it to a JSON object to work with
  .then(response=>response.json())
  // Render function
  .then((json)=>{
    renderRowsAndColumns(json)
  })


  // --- Add the graphs to the dashboard --- 

  // Gets the config file using the JS Fetch API
  fetch("../configs/dashboards/dashboard.json")
  // Gets the data and converts it to a JSON object to work with
  .then(response=>response.json())
  // Render function
  .then((json)=>{
    renderGraphs(json)
  })
  
  };
