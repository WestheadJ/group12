// import { GridStack, GridStackEngine, GridStackNode, GridStackMoveOpts } from 'gridstack';



// grid.on('resizestop', function(event: Event, el: GridItemHTMLElement) {
//     let width = parseInt(el.getAttribute('gs-w')) || 0;
//     or all values...
//     let node: GridStackNode = el.gridstackNode; // {x, y, width, height, id, ....}
//     console.log(node,"Test",width); 
//   });

import { GridStack, GridStackEngine, GridStackNode, GridStackMoveOpts } from 'gridstack';

class CustomEngine extends GridStackEngine {

  /** refined this to move the node to the given new location */
  public moveNode(node: GridStackNode, o: GridStackMoveOpts): boolean {
    // keep the same original X and Width and let base do it all...
    o.x = node.x;
    o.w = node.w;
    return super.moveNode(node, o);
  }
}

GridStack.registerEngine(CustomEngine);