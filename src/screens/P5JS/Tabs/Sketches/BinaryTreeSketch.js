function Node(val, x, y) {
  this.value = val;
  this.left = null;
  this.right = null;
  this.x = x;
  this.y = y;
}

Node.prototype.addNode = function (n) {
  if (n.value < this.value) {
    if (this.left === null) {
      this.left = n;
      this.left.x = this.x - 50;
      this.left.y = this.y + 20;
    } else this.left.addNode(n);
  } else if (n.value > this.value) {
    if (this.right === null) {
      this.right = n;
      this.right.x = this.x + 50;
      this.right.y = this.y + 20;
    } else this.right.addNode(n);
  }
};

Node.prototype.visit = function (p, parent) {
  if (this.left !== null) this.left.visit(p, this);
  console.log(this.value);
  p.fill(255);
  p.noStroke();
  p.textAlign(p.CENTER);
  p.text(this.value, this.x, this.y);
  p.stroke(255);
  p.noFill();
  p.ellipse(this.x, this.y, 20, 20);
  p.line(parent.x, parent.y, this.x, this.y);
  if (this.right !== null) this.right.visit(p, this);
};

Node.prototype.search = function (val) {
  if (this.value === val) return this;
  if (val < this.value && this.left !== null) return this.left.search(val);
  if (val > this.value && this.right !== null) return this.right.search(val);
  return null;
};

function Tree() {
  this.root = null;
}

Tree.prototype.addValue = function (val, p) {
  const n = new Node(val);
  if (this.root === null) {
    this.root = n;
    this.root.x = p.width / 2;
    this.root.y = 16;
  } else this.root.addNode(n);
};

Tree.prototype.traverse = function (p) {
  this.root.visit(p, this.root);
};

Tree.prototype.search = function (val) {
  const found = this.root.search(val);
  if (found !== null) console.log('Found');
  else console.log('Not found');
};

let tree;

const sketch = p => {
  // eslint-disable-next-line no-param-reassign
  p.setup = () => {
    p.createCanvas(600, 400);
    p.background(51);
    tree = new Tree();
    for (let i = 0; i < 10; i++) {
      tree.addValue(Math.floor(p.random(0, 100)), p);
    }
    tree.traverse(p);
    console.log(tree);
  };
  // eslint-disable-next-line no-param-reassign
  p.draw = () => {
  };
};

export default sketch;
