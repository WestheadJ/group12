let graph;
let graph_id;
let urlData;
window.onload = ()=>{
  let params = window.location.search;
  if(params.length == 0 || params.split("=")[0]!="?graph_id"){
    return window.location.replace("dashboard.php")
  }
  else{
    getGraphData()
  } 
}

function getGraphData(){
  return fetch('../scripts/getGraph.php', {
    //same info here
})
.then((response) => response.json())
.then((responseData) => {
  console.log(responseData)
})
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
