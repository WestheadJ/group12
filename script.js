GridStack.prototype.printCount = function() {
    console.log('grid has ' + this.engine.nodes.length + ' items');
  };
// // ...in your script
var grid = GridStack.init();
// grid.addWidget({w: 2, content: 'item 1'});

const serializedData = [
    {x: 0, y: 0, w: 2, h: 2,  content: 'ratio 1'},
    {x: 2, y: 3, w: 3, content: 'ratio 2'},
    {x: 1, y: 3, content: 'ratio 3'}
  ];
  
  grid.load(serializedData);

// you can now call
grid.printCount();