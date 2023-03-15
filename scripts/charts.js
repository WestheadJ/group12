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

    // For each row in the dashboard
    json.configs.forEach(row=>{
      
      // DEBUG
      console.log(row.rowID.toString())

      // Get the rowID
      var rowID = row.rowID.toString()
      
      var rowEl = document.createElement("div")
      
      rowEl.setAttribute("class","mainpage-row")
      rowEl.setAttribute("id",rowID)
      
      renderContainer.appendChild(rowEl)
      
      row.columns.forEach(column=>{
        
        // DEBUG
        console.log(column)

        var typeOfGraph = column.graphID

        if(typeOfGraph === "gauge"){  
          fetch('../configs/graphs/gauge.json')
          .then((response) => response.json())
          .then((json) =>{ 
                
            json.data.datasets[0].data=data
            json.data.datasets[0].value = value
            json.options.valueLabel.formatter = Math.round 
                
            rowEl = document.getElementById(rowID)
            var columnEl = document.createElement("div")
            columnEl.setAttribute("class","mainpage-row-item")
            columnEl.setAttribute("id",column.colID)
            
            rowEl.appendChild(columnEl)
          })
        }
        else{
            rowEl = document.getElementById(rowID.toString())
            var columnEl = document.createElement("div")
            columnEl.setAttribute("class","mainpage-row-item")
            columnEl.setAttribute("id",column.colID)
            rowEl.appendChild(columnEl)
            //   var ctx = document.getElementById('guageChart').getContext('2d');
            //   window.guageChart = new Chart(ctx, json);
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
  //   // console.log(json)
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
