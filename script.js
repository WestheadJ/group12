GridStack.prototype.ratio = function () {
  console.log(this.engine.nodes);
  w = this.engine.nodes[2]["w"];
  h = this.engine.nodes[2]["h"]; //we don't even need the hight as js sacles with width
  console.log(w + " " + h);
  ratio = .5; //h is 1/2 of w so express the following ratio of 1:2
  h = ratio * w;
  h = Math.ceil(h);
  console.log(w + " " + h);
  //now just need to update
  this.engine.nodes[2]["h"] = h;

  // THAT CRASHES --------------!!!!!
  //     const serializedData = [
  //       {x: 0, y: 0, w: 2, h: 2,  content: 'ratio 1'},
  //       {x: 2, y: 3, w: 3, content: 'ratio 2'},
  //       {x: 1, y: 3, w:w, h:h, content: 'ratio 3'}
  //     ];

  //     grid.load(serializedData);

  // grid.ratio();

};
// // ...in your script
var grid = GridStack.init();
// grid.addWidget({w: 2, content: 'item 1'});

const serializedData = [
  { x: 0, y: 0, w: 2, h: 2, content: 'ratio 1' },
  { x: 2, y: 3, w: 3, content: 'ratio 2' },
  { x: 1, y: 3, w: 4, h: 4, content: 'ratio 3' }
];

grid.load(serializedData);


//grid.on('resizestop', function(e, items) {/* items contains info */});



// you can now call
grid.ratio();