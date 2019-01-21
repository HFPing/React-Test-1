import React from 'react';
import P5Wrapper from 'react-p5-wrapper';

import sketch from './Sketches/BinaryTreeSketch';

const BinaryTree = () => (
  <P5Wrapper sketch={sketch} />
);

export default BinaryTree;
