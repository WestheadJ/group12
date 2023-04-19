

function edit() {
  menueToggle()
  var grid = GridStack.init();
  grid.setStatic(false);
  // Get all the widgets
  var widgets = document.getElementsByClassName('grid-stack-item');

  for (var i = 0; i < widgets.length; i++) {
    // Remove the delete button from the widget
    removeDeleteButton(widgets[i]);

    // Add the delete button to the widget
    addDeleteButton(widgets[i], grid);

    // Check if an edit button already exists on this widget
    if (widgets[i].querySelector('.edit-button')) {
      continue;
    }

    if (widgets[i].getAttribute('id') && widgets[i].getAttribute('id').split('-')[0] !== "title" && widgets[i].getAttribute('id').split('-')[0] !== "comment") {
      let id = widgets[i].getAttribute('id')
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
  // Check if the widget has a delete button
  var existingDeleteButton = widget.querySelector('.delete-widget');
  if (existingDeleteButton) {
    // Remove the delete button from the widget
    existingDeleteButton.remove();
  }

}



function addChart() {

  var widgetCount = document.querySelectorAll('.grid-stack-item').length;
  widgetCount += 1;
  x = "editWidget.php?newGraph=" + widgetCount;
  window.location.href = x;

}


function addTitle() {

  var gridstackItems = document.querySelectorAll('.grid-stack-item')
  var counter = 0

  gridstackItems.forEach((item, key) => {
    counter = key
  })

  var grid = GridStack.init();
  grid.addWidget({
    x: 0, y: 0, w: 4, h: 2, content: `<textarea id="title-${counter + 1}" class="title-editing" style="margin: 1.5rem; width:90%" name="variable" rows="1" cols="50">Title....</textarea>`
  });

  var newWidget = document.querySelector('.grid-stack-item:last-child');

  newWidget.setAttribute('id', `title-${counter + 1}`)

  // Add the delete button to the new widget
  addDeleteButton(newWidget, grid);
}


// When the DOM is ready...
document.addEventListener('DOMContentLoaded', function () {
  // Add delete buttons to existing title widgets
  var existingTitles = document.querySelectorAll('.title-editing');
  for (var i = 0; i < existingTitles.length; i++) {
    addDeleteButton(existingTitles[i].parentNode, grid);
  }


  // Remove delete buttons from all other title widgets
  var existingTitles = document.querySelectorAll('.title-editing');
  for (var i = 0; i < existingTitles.length; i++) {
    if (existingTitles[i].parentNode !== newWidget) {
      removeDeleteButton(existingTitles[i].parentNode);
    }
  }

})



function addComment() {
  var gridstackItems = document.querySelectorAll('.grid-stack-item')
  var counter = 0

  gridstackItems.forEach((item, key) => {
    counter = key
  })


  var grid = GridStack.init();


  console.log("comment adding")

  var newWidget = grid.addWidget({
    x: 0, y: 5, w: 8, h: 3, content: `<textarea id="comment-${counter + 1}" class="comment-editing" style="margin: 1.5rem; width:90%" name="variable" rows="4" cols="50">Comment...</textarea>`
  });
  var newWidget = document.querySelector('.grid-stack-item:last-child');

  newWidget.setAttribute('id', `comment-${counter + 1}`)

  // Add the delete button to the new comment widget, if it doesn't already have one
  var existingDeleteButton = newWidget.querySelector('.delete-widget');
  if (!existingDeleteButton) {
    addDeleteButton(newWidget, grid);
  }

}

function save() {

  var gridstackItems = document.querySelectorAll('.grid-stack-item')

  let dashboardJSON = {
    "userID": "watermangrp",
    configs: []
  }
  gridstackItems.forEach((item, i) => {
    console.log(item)
    var gs_h = item.getAttribute("gs-h")
    var gs_w = item.getAttribute("gs-w")
    var gs_x = item.getAttribute("gs-x")
    var gs_y = item.getAttribute("gs-y")
    var id = item.getAttribute("id")
    var contentType;
    var content;

    if (id.split('-')[0] === "comment") {
      contentType = "comment"
      content = {
        comment: item.querySelector(`#comment-${id.split('-')[1]}`).innerHTML
      }

    }
    else if (id.split('-')[0] === "title") {
      contentType = "title"
      content =
      {
        title: item.querySelector(`#title-${id.split('-')[1]}`).innerHTML
      }

    }
    else {
      contentType = "graph"
      content =
      {
        graph_id: id.split('-')[1]
      }


    }
    console.log(content)
    dashboardJSON.configs.push({
      widget_id: i + 1,
      gs_h: gs_h,
      gs_w: gs_w,
      gs_x: gs_x,
      gs_y: gs_y,
      content: content
    })


  })

  fetch("../scripts/saveDashboard.php?dashboard_id=1", { method: "post", body: JSON.stringify(dashboardJSON) })
    .then(res => res.json())
    .then(json => {
      json = JSON.parse(json)
      if (json.status === 200) {

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
        alert("Dashboard saved")
        menueToggle()
      }
      else {
        alert("There was an error saving the dashboard")
      }
    })

  console.log(dashboardJSON)



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