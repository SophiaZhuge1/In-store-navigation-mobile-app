import p5Types from 'p5';

function setLineDash(list: number[], drawingContext: CanvasRenderingContext2D) {
  if (list.length === 0) {
    drawingContext.setLineDash([]);
  } else {
    drawingContext.setLineDash(list);
  }
}

export default class LineAnimation {
  startPos: p5Types.Vector;
  endPos: p5Types.Vector;
  animationPercentage: number = 0;
  ctx: CanvasRenderingContext2D;
  /**
   * Animation speed, should be between 0 and 1
   */
  animationSpeed: number;
  p5: p5Types;
  constructor(
    startPos: p5Types.Vector,
    endPos: p5Types.Vector,
    animationSpeed: number,
    p5: p5Types,
    ctx: CanvasRenderingContext2D
  ) {
    this.startPos = startPos;
    this.endPos = endPos;
    this.p5 = p5;
    this.animationSpeed = animationSpeed;
    this.ctx = ctx;
  }

  drawLine() {
    const { p5, startPos, endPos } = this;
    p5.strokeWeight(2);
    p5.stroke(0);
    p5.line(startPos.x, startPos.y, endPos.x, endPos.y);
  }

  isDone() {
    return this.animationPercentage >= 1;
  }

  animate() {
    if (this.isDone()) return;
    const { p5, startPos, endPos, animationSpeed, animationPercentage, ctx } =
      this;
    p5.push();
    setLineDash([2, 2], ctx);
    let x = p5.lerp(startPos.x, endPos.x, animationPercentage);
    let y = p5.lerp(startPos.y, endPos.y, animationPercentage);
    p5.strokeWeight(3);
    p5.stroke(50, 50, 150);
    p5.line(startPos.x, startPos.y, x, y);
    p5.pop();
    this.animationPercentage += animationSpeed;
  }
}
