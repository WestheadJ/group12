function edit() { 
  menueToggle()
  var grid = GridStack.init();  
  grid.setStatic(false);
  alert('edit dashboard');
}


function addChart() {
  var grid = GridStack.init();  
  grid.addWidget({
    x: 0, y: 0, w: 8, h: 2, content: 'GRAPH'
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
    x: 0, y: 0, w: 4, content: 'COMMENT'
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