function edit() { 
  menueToggle()
  var grid = GridStack.init();  
  grid.setStatic(false);
  alert('edit dashboard');
}



function addChart() {
  var grid = GridStack.init();  
  grid.addWidget({
    x: 0, y: 5, w: 6, h: 5, content: '<canvas id="dummy"></canvas>' // here
    // gs-h="3" gs-w="1" gs-x="0" gs-y="5"
  });

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
  // var xValues = ["Italy", "France", "Spain", "USA", "Argentina"];
  // var yValues = [55, 49, 44, 24, 15];
  // var barColors = ["red", "green","blue","orange","brown"];

  // new Chart("dummy", {
  //   type: "bar",
  //   data: {
  //     labels: xValues,
  //     datasets: [{
  //       backgroundColor: barColors,
  //       data: yValues
  //     }]
  //   },
  //   options: {
  //     legend: {display: false},
  //     title: {
  //       display: true,
  //       text: "World Wine Production 2018"
  //     }
  //   }
  // });

  // let dummyCanvas = document.getElementById("dummy")
  // var dummyCTX = dummyCanvas.getContext('2d')
  // dummyGraph = new Chart(dummyCTX, responseData)
  // return dummyGraph

  // fetch('../scripts/dummyChart.js')

          var canvas = document.querySelectorAll('[id=dummy]')
          canvas.forEach(canvas => {
            fetch('../configs/graphs/defultGraph.json')
            .then((response) => response.json())
            .then((dData) =>{ 
              dData.data.datasets[0].data = data
              // dData.data.datasets[0].value = value
              // dData.options.valueLabel.formatter = Math.round 
              var ctx = canvas.getContext('2d');
              return window.Chart = new Chart(ctx, dData);
            })
          });

}


function addTitle() {
  var grid = GridStack.init();  
  grid.addWidget({
    x: 0, y: 0, w: 4, content: 'TITLE'
  });
}

function addComment() {
  var grid = GridStack.init();  
  grid.addWidget({
    x: 0, y: 5, w: 8, h: 3, content: '<textarea style="margin: 1.5rem; width:90%" name="variable" rows="4" cols="50">Comment...</textarea>'
  });
}

function save(){
  menueToggle()
  //NEED TO BE ABLE TO SAVE DASHBOARD TO DB HERE
  var grid = GridStack.init();  
  grid.setStatic(true);
  alert('dashboard saved')
}

function menueToggle(){
  var button = document.querySelectorAll('[id=editing]');
  button.forEach(button => {
    if (button.style.display === "none") {
      button.style.display = "revert";
    } else {
      button.style.display = "none";
    }
  });

  var button = document.querySelectorAll('[id=edit]');
  button.forEach(button => {
    if (button.style.display === "none") {
      button.style.display = "revert";
    } else {
      button.style.display = "none";
    }
  });
}