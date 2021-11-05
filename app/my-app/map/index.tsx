import React from 'react';
import Sketch from 'react-p5';
import p5Types from 'p5'; //Import this for typechecking and intellisense
import { Dimensions } from 'react-native';
import mapImagePath from '../assets/images/samplemap.png';

export default function MapCanvas() {
  let img: p5Types.Image;
  const { width } = Dimensions.get('window');
  const height = 500;
  const circleDiameter = 20;

  interface Point {
    isItem: boolean;
    isStart: boolean;
    x: number;
    y: number;
  }
  const mockPoints: Array<Point> = [
    {
      isStart: true,
      isItem: false,
      x: 95,
      y: height - 20,
    },
    {
      isStart: false,
      isItem: true,
      x: 95,
      y: height - 110,
    },
    {
      isStart: false,
      isItem: false,
      x: 200,
      y: height - 110,
    },
    {
      isStart: false,
      isItem: true,
      x: 200,
      y: 130,
    },
  ];

  //See annotations in JS for more information
  const setup = (p5: p5Types, canvasParentRef: Element) => {
    p5.createCanvas(width, height).parent(canvasParentRef);
    img = p5.loadImage(mapImagePath);
  };

  const drawStartingPosition = (p: Point, p5: p5Types) => {
    const { x, y } = p;
    const c = p5.color(255, 0, 0);
    p5.fill(c);
    p5.circle(x, y, circleDiameter);
  };

  const drawStoppingPosition = (p: Point, p5: p5Types) => {
    const { x, y } = p;
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
    switch (p.isStart) {
      case true:
        drawStartingPosition(p, p5);
        break;
      case false:
        drawStoppingPosition(p, p5);
        break;
    }
  };

  const drawLine = (p1: Point, p2: Point, p5: p5Types) => {
    const { x: x1, y: y1 } = p1;
    const { x: x2, y: y2 } = p2;
    p5.stroke(255);
    p5.line(x1, y1, x2, y2);
  }

  const draw = (p5: p5Types) => {
    p5.background(0);
    p5.image(img, 0, 0, width, height);
    for (let i = 0; i < mockPoints.length - 1; i++) {
      drawLine(mockPoints[i], mockPoints[i + 1], p5);
    }
    mockPoints.forEach((p) => drawPoint(p, p5));
  };

  return <Sketch setup={setup} draw={draw} />;
}
