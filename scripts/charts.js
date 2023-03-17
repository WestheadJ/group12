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
  fetch("../configs/dashboards/dashboard.json")
  .then(response=>response.json())
  .then((json)=>{

    // Get the render container
    var renderContainer = document.getElementById('render')
    
    var rowID
    var rowEl
    
    // For each row in the dashboard
    json.configs.forEach(row=>{
      
      // DEBUG
      // console.log("This is row:",row.rowID.toString())

      // Get the rowID
      rowID = row.rowID.toString()
      
      // Ready a div to become a row
      rowEl = document.createElement("div")
      
      // Give it a class and an id
      rowEl.setAttribute("class","mainpage-row")
      rowEl.setAttribute("id","row-id-"+rowID)
      
      // Add div to the container
      renderContainer.appendChild(rowEl)
      
      // Loop through the rows
      row.columns.forEach(column=>{
        
        // DEBUGS
        // console.log(column)
        console.log("This is column",column.colID.toString(),"of row",rowID )
        // console.log("GraphID =",column.graphID)
        
        // Get the column ID to a string
        var colID = column.colID.toString()
        // Get the graphs ID
        var typeOfGraph = column.graphID

        // Get the row div that you are working in
        var insertRowEl = document.getElementById("row-id-"+rowID)
        
        // Prepare a canvas element
        var columnEl = document.createElement("canvas")
        
        // Give canvas a class and ID
        columnEl.setAttribute("class","mainpage-row-item")
        columnEl.setAttribute("id","row-id-"+rowID+"col-id-"+colID)
        
        insertRowEl.appendChild(columnEl)

        if(typeOfGraph == "gauge"){
          fetch('../configs/graphs/gauge.json')
            .then((response) => response.json())
            .then((json) =>{ 
              json.data.datasets[0].data=data
              json.data.datasets[0].value = value
              json.options.valueLabel.formatter = Math.round 

              // DEBUG 
              // console.log(json)
              // console.log("data:",json.data.datasets[0].data=data)
              // console.log("value",json.data.datasets[0].value = value)

              var x = document.getElementById("row-id-"+rowID+"col-id-"+colID)
              console.log(x)
              var ctx = x.getContext("2d");
              window.gauge = new Chart(ctx, json);
          })}
          else{
            // console.log("not gauge")
          }
      })
    })
  })


  // // https://www.freecodecamp.org/news/how-to-read-json-file-in-javascript/w

  // // Getting the gauge
  // fetch('../configs/graphs/gauge.json')
  //   .then((response) => response.json())
  //   .then((json) =>{ 
  //   json.data.datasets[0].data=data
  //   json.data.datasets[0].value = value
  //   json.options.valueLabel.formatter = Math.round 

  //   // DEBUG 
    // console.log(json)
  //   // console.log("data:",json.data.datasets[0].data=data)
  //   // console.log("value",json.data.datasets[0].value = value)
    
  //   var ctx = document.getElementById('guageChart').getContext('2d');
  //   window.guageChart = new Chart(ctx, json);


  //   ctx = document.getElementById('guageChartR2').getContext('2d');
  //   window.guageChart = new Chart(ctx, json);
    

  //   ctx = document.getElementById('guageChartR4').getContext('2d');
  //   return window.guageChart = new Chart(ctx, json);
  // });


  // fetch('../configs/graphs/bar.json')
  //     .then((response) => response.json())
  //     .then((json) =>{ 
      
  //       // DEBUG
  //     // console.log(json)
      
  //     json.data.datasets[0].data = data

  //     var ctx = document.getElementById('barChartR2').getContext('2d');
  //     window.lineChart = new Chart(ctx, json);

  //     ctx = document.getElementById('barChartR3').getContext('2d');
  //     window.lineChart = new Chart(ctx, json);

  //     ctx = document.getElementById('barChart').getContext('2d');
  //     return window.lineChart = new Chart(ctx, json);
  //   });

  //   fetch('../configs/graphs/pie.json')
  //   .then((response)=>response.json())
  //   .then((json)=>{
  //     json.data.datasets[0].data=data

  //     var ctx = document.getElementById('pieChart').getContext('2d');
  //     window.lineChart = new Chart(ctx, json);var 
      
  //     ctx = document.getElementById('pieChartR2').getContext('2d');
  //     window.lineChart = new Chart(ctx, json);
  
  //     ctx = document.getElementById('pieChartR3').getContext('2d');
  //     return window.lineChart = new Chart(ctx, json);

  //   })

  //   fetch("../configs/graphs/line.json")
  //   .then(response=>response.json())
  //   .then((json)=>{
  //     json.data.datasets[0].data = data  
      
  //     var ctx = document.getElementById('lineChart').getContext('2d');
  //     return window.lineChart = new Chart(ctx, json);
  //   })

};
