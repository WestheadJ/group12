let graph

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
        graph = new Chart(ctx, gaugeData);
        return graph
      })
    }
    else{
      fetch(`../configs/graphs/${graph_id[1]}.json`)
      .then(response=>response.json())
      .then(graphData=>{
        graphData.data.datasets[0].data = data
        var ctx = canvas.getContext('2d');
      
        const form = document.getElementById('form')

        const titleInput = document.createElement("input")
        titleInput.setAttribute('type','text')
        titleInput.setAttribute('id','graph-title')
        titleInput.setAttribute('name',"graph-title")
        titleInput.setAttribute('value',graphData.data.datasets[0].label)

        form.appendChild(titleInput)
        
        graph = new Chart(ctx, graphData)
        return graph
      })
    }

  }
}
// https://stackoverflow.com/questions/7056669/how-to-prevent-default-event-handling-in-an-onclick-method
function updatePreview(){
  let currentTitle = document.getElementById('graph-title').value
  console.log("Update!")
  graph.config.data.datasets[0].label = currentTitle
  graph.update() 
}