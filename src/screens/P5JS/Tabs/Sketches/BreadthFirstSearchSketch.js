import data from './bacon.json';

function Node(value) {
  this.value = value;
  this.edges = [];
  this.searched = false;
  this.parent = null;
}

// eslint-disable-next-line func-names
Node.prototype.addEdge = function (neighbor) {
  this.edges.push(neighbor);
  neighbor.edges.push(this);
};

function Graph() {
  this.nodes = [];
  this.graph = {};
  this.start = null;
  this.end = null;
}

// eslint-disable-next-line func-names
Graph.prototype.getNode = function (actor) {
  const n = this.graph[actor];
  return n;
};

// eslint-disable-next-line func-names
Graph.prototype.addNode = function (n) {
  this.nodes.push(n);
  const { value } = n;
  this.graph[value] = n;
};

Graph.prototype.setStart = function (actor) {
  this.start = this.graph[actor];
  return this.start;
};

Graph.prototype.setEnd = function (actor) {
  this.end = this.graph[actor];
  return this.end;
};

let graph;

const sketch = (p) => {
  // eslint-disable-next-line
  p.setup = () => {
    p.createCanvas(600, 400);
    p.background(51);
    graph = new Graph();
    data.movies.forEach(({ title, cast }) => {
      const movieNode = new Node(title);
      graph.addNode(movieNode);
      cast.forEach(actor => {
        let actorNode = graph.getNode(actor);
        if (!actorNode) actorNode = new Node(actor);
        graph.addNode(actorNode);
        movieNode.addEdge(actorNode);
      });
    });
    const start = graph.setStart('Rachel McAdams');
    // const start = graph.setStart('Kevin Bacon');
    const end = graph.setEnd('Kevin Bacon');

    const queue = [];
    start.searched = true;
    queue.push(start);

    while (queue.length > 0) {
      const current = queue.shift();
      console.log(current);
      if (current === end) {
        console.log(`Found ${current.value}`);
        break;
      }
      current.edges.forEach(edge => {
        if (!edge.searched) {
          edge.searched = true;
          edge.parent = current;
          queue.push(edge);
        }
      });
    }


    const path = [end];
    let next = end.parent;
    while (next !== null) {
      path.push(next);
      next = next.parent;
    }

    let txt = '';
    path.slice().reverse().forEach((n, i) => {
      txt += `${n.value}${i < path.length - 1 ? ' --> ' : ''}`;
    });
    console.log(txt);
    p.fill(255);
    p.noStroke();
    p.text(txt, 0, 10);
  };
};

export default sketch;
