function edit() {
  menueToggle()
  var grid = GridStack.init();
  grid.setStatic(false);
  // Get all the widgets
  var widgets = document.getElementsByClassName('grid-stack-item');

  // Loop through each widget
  for (var i = 0; i < widgets.length; i++) {
    // Remove the delete button from the widget
    removeDeleteButton(widgets[i]);

    // Add the delete button to the widget
    addDeleteButton(widgets[i], grid);
  }

  
    if (widgets[i].getAttribute('id')) {
      let id = widgets[i].getAttribute('id')
      console.log(id)
      let editButton = document.createElement("a")
      if (id.split('-')[0] === "comment" || id.split('-')[0] === "title") {
        editButton.setAttribute("href", `editWidget.php?widget_id=${id.split('-')[1]}&content=${id.split('-')[0]}`)
        editButton.setAttribute("class", "edit-button")
      }
      else {
        editButton.setAttribute("href", `editWidget.php?widget_id=${id.split('-')[0]}&content=${id.split('-')[1]}`)
        editButton.setAttribute("class", "edit-button")
      }
      editButton.innerText = "Edit"
      widgets[i].appendChild(editButton)
    }


  }

function addDeleteButton(widget, grid) {
  // Check if the widget already has a delete button
  var existingDeleteButton = widget.querySelector('.delete-widget');
  if (!existingDeleteButton) {
    // Create a delete button
    var deleteButton = document.createElement('button');
    deleteButton.innerHTML = 'X';
    deleteButton.className = 'delete-widget';
    deleteButton.onclick = function () {
      // Remove the widget from the grid
      grid.removeWidget(widget);
    };
    // Append the delete button to the widget
    widget.appendChild(deleteButton);
  }
}
function removeDeleteButton(widget) {
  var existingDeleteButton = widget.querySelector('.delete-widget');
  if (existingDeleteButton) {
    existingDeleteButton.parentNode.removeChild(existingDeleteButton);
  }
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
    ]
  };

  // Get the new widget
  var newWidget = document.querySelector('.grid-stack-item:last-child');

  // Add the delete button to the new widget
  addDeleteButton(newWidget, grid);

  var data = randomData();

  var canvas = document.querySelectorAll('[id=dummy]')
  canvas.forEach(canvas => {
    fetch('../configs/graphs/defultGraph.json')
      .then((response) => response.json())
      .then((dData) => {
        // dData.data.datasets[0].data = data
        // dData.data.datasets[0].value = value
        // dData.options.valueLabel.formatter = Math.round 
        var ctx = canvas.getContext('2d');
        return window.dfltChart = new Chart(ctx, dData);
      })
  });

}


function addTitle() {
  var grid = GridStack.init();
  grid.addWidget({
    x: 0, y: 0, w: 4, content: '<textarea class="title-editing" style="margin: 1.5rem; width:90%" name="variable" rows="1" cols="50">Title....</textarea>'
  });
  var newWidget = document.querySelector('.grid-stack-item:last-child');

  // Add the delete button to the new widget
  addDeleteButton(newWidget, grid);
}
// When the DOM is ready...
document.addEventListener('DOMContentLoaded', function() {
  // Add delete buttons to existing title widgets
  var existingTitles = document.querySelectorAll('.title-editing');
  for (var i = 0; i < existingTitles.length; i++) {
    addDeleteButton(existingTitles[i].parentNode, grid);
  }

  // Add click event listener to the add title button
  var addTitleButton = document.getElementById('add-title-button');
  addTitleButton.onclick = function() {
    // Add the new title widget
    addTitle();

    // Remove delete buttons from all other title widgets
    var existingTitles = document.querySelectorAll('.title-editing');
    for (var i = 0; i < existingTitles.length; i++) {
      if (existingTitles[i].parentNode !== newWidget) {
        removeDeleteButton(existingTitles[i].parentNode);
      }
    }
  };
});


var commentCounter = 0;

function addComment() {
  var grid = GridStack.init();
  // commentCounter += 1;
  // let comm_id = "comment-" + commentCounter
  console.log(commentCounter);
  grid.addWidget({
    x: 0, y: 5, w: 8, h: 3, content: '<textarea class="comment-editing" style="margin: 1.5rem; width:90%" name="variable" rows="4" cols="50">Comment...</textarea>'
  });

  // Add the delete button to the new comment widget, if it doesn't already have one
  var newWidget = document.querySelector('.grid-stack-item:last-child');
  var existingDeleteButton = newWidget.querySelector('.delete-widget');
  if (!existingDeleteButton) {
    addDeleteButton(newWidget, grid);
  }

  // Add the delete button to all existing comment widgets that don't already have one
  var commentWidgets = document.querySelectorAll('.comment-editing');
  for (var i = 0; i < commentWidgets.length; i++) {
    var widget = commentWidgets[i].parentNode;
    var existingDeleteButton = widget.querySelector('.delete-widget');
    if (!existingDeleteButton) {
      addDeleteButton(widget, grid);
    }
  }
}

function addDeleteButtonsToComments(grid) {
  var commentWidgets = document.querySelectorAll('.comment-editing');
  for (var i = 0; i < commentWidgets.length; i++) {
    var widget = commentWidgets[i].parentNode;
    addDeleteButton(widget, grid);
  }
}


function save() {
  menueToggle()
  //NEED TO BE ABLE TO SAVE DASHBOARD TO DB HERE
  var grid = GridStack.init();
  grid.setStatic(true);
  var deleteButtons = document.getElementsByClassName('delete-widget');
  while (deleteButtons[0]) {
    deleteButtons[0].parentNode.removeChild(deleteButtons[0]);
  }

  var editButtons = document.getElementsByClassName('edit-button');
  while (editButtons[0]) {
    editButtons[0].parentNode.removeChild(editButtons[0])
  }
  alert('dashboard saved')

  // Toggles between CSS classes for static and live state
  var comment = document.querySelectorAll('[class=comment-editing]');
  comment.forEach(comment => {
    comment.setAttribute("class", `comment-saved`);
  });

  // Toggles between CSS classes for static and live state
  var title = document.querySelectorAll('[class=title-editing]');
  title.forEach(title => {
    title.setAttribute("class", `title-saved`);
  });

}

function menueToggle() {
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

  // Toggles between CSS classes for static and live state
  var comment = document.querySelectorAll('[class=comment-saved]');
  comment.forEach(comment => {
    comment.setAttribute("class", `comment-editing`);
  });

  // Toggles between CSS classes for static and live state
  var title = document.querySelectorAll('[class=title-saved]');
  title.forEach(title => {
    title.setAttribute("class", `title-editing`);
  });

}