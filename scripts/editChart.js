let graph;
let graph_id;
let urlData;
window.onload = ()=>{
  let params = window.location.search;
  if(params.length == 0 || params.split("=")[0]!="?graph_id"){
    window.location.replace("dashboard.php")
  }
  else{
    graph_id = params.split("=")
    let canvas = document.getElementById('editBarChart');
    if(graph_id[1]==="gauge"){
      fetch('../configs/graphs/gauge.json')
      .then((response) => response.json())
      .then((gaugeData) =>{
        urlData = gaugeData
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
        urlData = graphData
        graphData.data.datasets[0].data = data
        var ctx = canvas.getContext('2d');
      
        const form = document.getElementById('form')

        const titleInput = document.createElement("input")
        titleInput.setAttribute('type','text')
        titleInput.setAttribute('id','graph-title')
        titleInput.setAttribute('name',"graph-title")
        titleInput.setAttribute('value',graphData.data.datasets[0].label)
        titleInput.setAttribute('oninput',"updatePreview()")

        form.appendChild(titleInput)
          
        graph = new Chart(ctx, graphData)
        return graph,graphData
      })
    }
  }  
}
// https://stackoverflow.com/questions/7056669/how-to-prevent-default-event-handling-in-an-onclick-method
function updatePreview(){
  let currentTitle = document.getElementById('graph-title').value
  graph.data.datasets[0].label = currentTitle
  graph.update() 
}

const replacerFunc = () => {
  const visited = new WeakSet();
  return (key, value) => {
    if (typeof value === "object" && value !== null) {
      if (visited.has(value)) {
        return;
      }
      visited.add(value);
    }
    return value;
  };
};




function save(e){
  var title = document.getElementById('graph-title').value
  e.preventDefault()
  console.log(graph.config.data)
  fetch("http://127.0.0.1:4001/save-graph", {
  method: "POST",
  body: JSON.stringify({
    graph_id: graph_id[1],
    graph_title: title
    
  }),
  headers: {
    "Content-type": "application/json; charset=UTF-8"
  }
});
}
