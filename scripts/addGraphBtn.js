function insertAfter(referenceNode, newNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}

var count = 0
function buttonClickityClick(){
    var el = document.createElement("div");
    el.setAttribute("class","mainpage-row-item")
    var div = document.getElementById("row-1-item-1");
    insertAfter(div, el);
}
