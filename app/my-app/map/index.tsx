import React from 'react';
import Sketch from 'react-p5';
import p5Types from 'p5'; //Import this for typechecking and intellisense
import { Dimensions } from 'react-native';
import mapImagePath from '../assets/images/mapai-01.png';

/**
 * Map location point
 */
interface Point {
  isItem: boolean;
  isStart: boolean;
  pos: p5Types.Vector;
}

/**
 * Path animation class
 */
class LineAnimation {
  startPos: p5Types.Vector;
  endPos: p5Types.Vector;
  currentPos: p5Types.Vector;
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
    this.currentPos = p5.createVector(0, 0);
    this.startPos = startPos;
    this.endPos = endPos;
    this.p5 = p5;
    this.animationSpeed = animationSpeed;
    this.ctx = ctx;
  }

  drawLine() {
    const { p5, startPos, endPos } = this;
    p5.strokeWeight(3);
    p5.stroke(0);
    p5.line(startPos.x, startPos.y, endPos.x, endPos.y);
  }

  isDone() {
    return this.animationPercentage >= 1;
  }

  animate() {
    if (this.isDone()) return;
    const { p5, startPos, endPos, animationSpeed, animationPercentage, ctx } = this;
    p5.push();
    setLineDash([5, 5], ctx);
    let x = p5.lerp(startPos.x, endPos.x, animationPercentage);
    let y = p5.lerp(startPos.y, endPos.y, animationPercentage);
    p5.strokeWeight(5);
    p5.stroke(50, 50, 150);
    p5.line(startPos.x, startPos.y, x, y);
    p5.pop();
    this.animationPercentage += animationSpeed;
  }
}

function setLineDash(list: Array<number>, drawingContext: CanvasRenderingContext2D) {
  if (list.length === 0) {
    drawingContext.setLineDash([]);
  } else {
    drawingContext.setLineDash(list);
  }
}

export default function MapCanvas() {
  let img: p5Types.Image;
  const { width } = Dimensions.get('window');
  const height = 500;
  const circleDiameter = 20;
  let scale = 1;
  let animations: Array<LineAnimation> = [];
  let finishedAnimations: Array<LineAnimation> = [];
  let mockPoints: Array<Point>;
  let origin: p5Types.Vector;
  let ctx: CanvasRenderingContext2D;

  const drawStartingPosition = (p: Point, p5: p5Types) => {
    const { x, y } = p.pos;
    const c = p5.color(0, 255, 0);
    p5.fill(c);
    p5.circle(x, y, circleDiameter);
  };

  const drawStoppingPosition = (p: Point, p5: p5Types) => {
    const { x, y } = p.pos;
    switch (p.isItem) {
      case true:
        const c = p5.color(0, 0, 255);
        p5.fill(c);
        p5.circle(x, y, circleDiameter);
        break;
      case false:
        break;
    }
  };

  const drawPoint = (p: Point, p5: p5Types) => {
    p5.strokeWeight(1);
    p5.stroke(255, 255, 255);
    switch (p.isStart) {
      case true:
        drawStartingPosition(p, p5);
        break;
      case false:
        drawStoppingPosition(p, p5);
        break;
    }
  };

  const changeScale = (event: WheelEvent) => {
    if (event.deltaY > 0) {
      scale += 0.1;
    } else {
      scale -= 0.1;
    }
  };

  const runAnimations = (p5: p5Types) => {
    if (animations.length > 0) {
      let currentAnimation = animations[0];
      currentAnimation.animate();
      if (currentAnimation.isDone()) {
        animations.shift();
        finishedAnimations.push(currentAnimation);
      }
    }
  };

  const panView = (p5: p5Types) => {
    const { mouseX, mouseY, pmouseX, pmouseY } = p5;
    origin.x += mouseX - pmouseX;
    origin.y += mouseY - pmouseY;
  };

  //See annotations in JS for more information
  const setup = (p5: p5Types, canvasParentRef: Element) => {
    // create map points
    mockPoints = [
      {
        isStart: true,
        isItem: false,
        pos: p5.createVector(12, 350),
      },
      {
        isStart: false,
        isItem: true,
        pos: p5.createVector(150, height - 100),
      },
      {
        isStart: false,
        isItem: false,
        pos: p5.createVector(150, 120),
      },
      {
        isStart: false,
        isItem: true,
        pos: p5.createVector(200, 120),
      },
    ];
    // declare how lines should be joined
    p5.strokeJoin(p5.ROUND);

    // create drawing canvas and add event listeners
    const cnv = p5.createCanvas(width, height).parent(canvasParentRef);
    ctx = cnv.elt.getContext('2d');
    cnv.mouseWheel(changeScale);
    cnv.touchMoved(e => e.preventDefault());

    // load path animations
    for (let i = 0; i < mockPoints.length - 1; i++) {
      const p1 = mockPoints[i];
      const p2 = mockPoints[i + 1];
      const animation = new LineAnimation(p1.pos, p2.pos, 0.01, p5, ctx);
      animations.push(animation);
    }

    // load background image
    img = p5.loadImage(mapImagePath);

    // set origin
    origin = p5.createVector(0, 0);
  };

  const draw = (p5: p5Types) => {
    p5.scale(scale);
    p5.translate(origin.x, origin.y);
    p5.background(200);
    p5.image(img, 0, 0, width, height);
    finishedAnimations.forEach((a) => a.drawLine());
    runAnimations(p5);
    mockPoints.forEach((p) => drawPoint(p, p5));
  };

  return <Sketch setup={setup} draw={draw} mouseDragged={panView} />;
}
