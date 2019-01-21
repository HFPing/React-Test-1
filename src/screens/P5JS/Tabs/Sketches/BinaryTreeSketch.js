function Node(val) {
  this.value = val;
  this.left = null;
  this.right = null;
}

Node.prototype.addNode = function (n) {
  if (n.value < this.value) {
    if (this.left === null) this.left = n;
    else this.left.addNode(n);
  } else if (n.value > this.value) {
    if (this.right === null) this.right = n;
    else this.right.addNode(n);
  }
};

Node.prototype.visit = function () {
  if (this.left !== null) this.left.visit();
  console.log(this.value);
  if (this.right !== null) this.right.visit();
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

Tree.prototype.addValue = function (val) {
  const n = new Node(val);
  if (this.root === null) this.root = n;
  else this.root.addNode(n);
};

Tree.prototype.traverse = function () {
  this.root.visit();
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
    p.noCanvas();
    tree = new Tree();
    for (let i = 0; i < 10; i++) {
      tree.addValue(Math.floor(p.random(0, 100)));
    }
    tree.traverse();
    console.log(tree);
  };
  // eslint-disable-next-line no-param-reassign
  p.draw = () => {
  };
};

export default sketch;
