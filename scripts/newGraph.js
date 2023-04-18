window.onload = () => {

    grid.addWidget({
        x: 0, y: 5, w: 6, h: 5, content: '<canvas id="dummy"></canvas>' // here
        // gs-h="3" gs-w="1" gs-x="0" gs-y="5"
    });
      

    var canvas = document.querySelectorAll('[id=dummy]')
    canvas.forEach(canvas => {
      fetch('../configs/graphs/defultGraph.json')
        .then((response) => response.json())
        .then((dData) => {
          // dData.data.datasets[0].data = data
          // dData.data.datasets[0].value = value
          // dData.options.valueLabel.formatter = Math.round 
          var ctx = canvas.getContext('2d');
          return window.Chart = new Chart(ctx, dData);
        })
    });

}