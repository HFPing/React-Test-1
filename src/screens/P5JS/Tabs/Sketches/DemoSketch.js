const sketch = p => {
  // eslint-disable-next-line no-param-reassign
  p.setup = () => {
    p.createCanvas(720, 400);
    p.noStroke();
    p.rectMode(p.CENTER);
  };
  // eslint-disable-next-line no-param-reassign
  p.draw = () => {
    p.background(230);
    p.fill(244, 122, 158);
    p.rect(p.mouseX, p.height / 2, p.mouseY / 2 + 10, p.mouseY / 2 + 10);
    p.fill(237, 34, 93);
    const inverseX = p.width - p.mouseX;
    const inverseY = p.height - p.mouseY;
    p.rect(inverseX, p.height / 2, (inverseY / 2) + 10, (inverseY / 2) + 10);
  };
};

export default sketch;
