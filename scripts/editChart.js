window.onload = ()=>{
  const params = window.location.search;
  if(params.length == 0 || params.split("=")[0]!="?graph_id"){
    window.location.replace("dashboard.php")
  }
  else{
    const graph_id = params.split("=")
    let canvas = document.getElementById('editBarChart');
    if(graph_id[1]==="gauge"){
      fetch('../configs/graphs/gauge.json')
      .then((response) => response.json())
      .then((gaugeData) =>{ 
        gaugeData.data.datasets[0].data=data
        gaugeData.data.datasets[0].value = value
        gaugeData.options.valueLabel.formatter = Math.round 
        var ctx = canvas.getContext('2d');
        return window.guageChart = new Chart(ctx, gaugeData);
      })
    }
    else{
      fetch(`../configs/graphs/${graph_id[1]}.json`)
      .then(response=>response.json())
      .then(graphData=>{
        graphData.data.datasets[0].data = data
        var ctx = canvas.getContext('2d');
        return window.graph = new Chart(ctx, graphData)
      })
    }
  }
}