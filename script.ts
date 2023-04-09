import {GridItemHTMLElement} from "gridstack.is"; 



grid.on('resizestop', function(event: Event, el: GridItemHTMLElement) {
  const cell = grid.getCell(el);
  const width = cell.gridstackNode.width;
  console.log(width);
  console.log(event);
});