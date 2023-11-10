// var theta;
var tree = [];
var leaves = [];
var count=0;
var windSpeedx = 5;
var windSpeedy = 7;
var trunkSize = 15, reduce=0.8; 

function setup() {
  createCanvas(1050, 725);
  // slider = createSlider(0,TWO_PI, PI/4, 0.01);
  var a = createVector(width/2, height);
  var b = createVector(width/2, height - 200);
  var root = new Branch(a, b);

  tree[0] = root;
}

function mousePressed() {
  for(var i=tree.length-1; i>= 0; i--){
    if(!tree[i].finished){
      tree.push(tree[i].branchA());
      tree.push(tree[i].branchB());
      tree[i].size = trunkSize;
    }
    tree[i].finished = true;
  }
  trunkSize = trunkSize*reduce;
  count++;

  if(count === 4){
    count = 0;
    for(var i=0; i < tree.length; i++){
      if(!tree[i].finished && random(-1,1) > 0.99){
        var leaf = tree[i].end.copy();
        leaves.push(leaf);
      }
    }
  }
}

function draw() {
  background(190, 214, 158);

  for(var i=0; i < tree.length; i++){
    tree[i].show();
  }

  for(var i=0; i < leaves.length; i++){
    fill(255,34,40);
    noStroke();
    ellipse(leaves[i].x, leaves[i].y, 8,8);
    leaves[i].y += random(-1,1)*windSpeedy;
    leaves[i].x += random(-0.7,1.3)*windSpeedx;
  }
}

