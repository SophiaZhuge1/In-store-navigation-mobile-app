import mapImagePath from '../assets/images/mapai-01.png';
import p5Types from 'p5';
import pointPositions from './pointPositions';
import React from 'react';
import Sketch from 'react-p5';
import { Dimensions } from 'react-native';
import LineAnimation from './LineAnimation';


/**
 * Map location point
 */
interface Point {
  isItem: boolean;
  isStart: boolean;
  pos: p5Types.Vector;
}

interface MapProps {
  isMapEnabled: boolean;
  currentItemIndex: number;
}

/**
 * Path animation class
 */

export default function MapCanvas(props: MapProps) {
  const [img, setImg] = React.useState<p5Types.Image>(new p5Types.Image());
  const { width } = Dimensions.get('window');
  const height = Dimensions.get('window').height - 150;
  const imageDims = {
    width: 375,
    height: 500,
  };
  const circleDiameter = 20;
  const [scale, setScale] = React.useState(width / imageDims.width);
  const [animations, setAnimations] = React.useState<Array<LineAnimation>>([]);
  const [futureAnimations, setFutureAnimations] = React.useState<
    Array<Array<LineAnimation>>
  >([]);
  const [finishedAnimations, setFinishedAnimations] = React.useState<
    Array<LineAnimation>
  >([]);
  const [mockPoints, setMockPoints] = React.useState<Array<Point>>([]);
  const [origin, setOrigin] = React.useState<p5Types.Vector>(
    new p5Types.Vector()
  );
  const [ctx, setCtx] = React.useState<CanvasRenderingContext2D>();
  const [animationIndex, setAnimationIndex] = React.useState(0);

  const centerVerticallyToStart = (p5: p5Types) => {
    const visibleHeight = height - 100;
    if (imageDims.height < visibleHeight) {
      const diff = visibleHeight - imageDims.height;
      setOrigin((origin) => origin.add(0, diff / 2));
    } else {
      const diff = imageDims.height - visibleHeight;
      setOrigin((origin) => origin.add(0, -diff / 2));
    }
  };

  const resizeMap = () => {
    const visibleHeight = height - 100;
    if (imageDims.height > visibleHeight) {
      const scale = visibleHeight / imageDims.height;
      setScale(scale);
    }
    if (imageDims.width < width) {
      const diff = width - imageDims.width;
      console.log(diff / 2);
      setOrigin((origin) => origin.add(diff / 2, 0));
    }
  };

  const drawStartingPosition = (p: Point, p5: p5Types) => {
    const { x, y } = p.pos;
    const c = p5.color(0, 255, 0);
    p5.fill(c);
    p5.circle(x, y, circleDiameter);
  };

  const drawStoppingPosition = (p: Point, p5: p5Types) => {
    const { x, y } = p.pos;
    let c: p5Types.Color;
    switch (p.isItem) {
      case true:
        c = p5.color('#1E539A');
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
      setScale((scale) => scale + 0.1);
    } else {
      setScale((scale) => scale - 0.1);
    }
  };

  const runAnimations = (p5: p5Types) => {
    if (animations.length > 0) {
      let currentAnimation = animations[0];
      currentAnimation.animate();
      if (currentAnimation.isDone()) {
        setAnimations((animations) => animations.slice(1));
        setFinishedAnimations((finishedAnimations) => [
          ...finishedAnimations,
          currentAnimation,
        ]);
      }
    }
  };

  const addGridPoint = (_: MouseEvent, p5: p5Types) => {
    const { mouseX, mouseY } = p5;
    const gridPos = {
      x: Math.round(mouseX / 10) * 10,
      y: Math.round(mouseY / 10) * 10,
    };
    setMockPoints((mockPoints) => [
      ...mockPoints,
      {
        isStart: false,
        isItem: true,
        pos: p5.createVector(gridPos.x, gridPos.y),
      },
    ]);
    console.info(`Added point at ${gridPos.x}, ${gridPos.y}`);
  };

  const panView = (p5: p5Types) => {
    if (props.isMapEnabled) {
      const { mouseX, mouseY, pmouseX, pmouseY } = p5;
      setOrigin((origin) =>
        origin.add(p5.createVector(mouseX - pmouseX, mouseY - pmouseY))
      );
    }
  };

  const addPointsToCanvas = (p5: p5Types): Array<Point> => {
    // add all points to canvas
    let tempMockPoints: Array<Point> = [];
    pointPositions.forEach((p) => {
      tempMockPoints.push({
        isStart: p.x === 20 && p.y === 350,
        isItem: p.isItem,
        pos: p5.createVector(p.x, p.y),
      });
    });

    setMockPoints(tempMockPoints);
    return tempMockPoints;
  };

  //See annotations in JS for more information
  const setup = (p5: p5Types, canvasParentRef: Element) => {
    // declare how lines should be joined
    p5.strokeJoin(p5.ROUND);

    // create drawing canvas and add event listeners
    const cnv = p5.createCanvas(width, height).parent(canvasParentRef);
    let tempCtx = cnv.elt.getContext('2d');
    setCtx(tempCtx);
    cnv.mouseWheel(changeScale);
    cnv.touchMoved((e) => e.preventDefault());

    // enables drawing points on canvas
    // cnv.mouseClicked((e) => addGridPoint(e, p5));

    let tempMockPoints = addPointsToCanvas(p5);

    // load path animations
    let tempAnimations : Array<LineAnimation> = [];
    for (let i = 0; i < tempMockPoints.length - 1; i++) {
      const p1 = tempMockPoints[i];
      const p2 = tempMockPoints[i + 1];
      const animation = new LineAnimation(p1.pos, p2.pos, 0.05, p5, tempCtx!);
      tempAnimations.push(animation);
      if (p2.isItem) {
        setFutureAnimations((futureAnimations) => [
          ...futureAnimations,
          tempAnimations,
        ]);
        tempAnimations = [];
      }
      
    }

    // load background image
    setImg(p5.loadImage(mapImagePath));

    // set origin
    setOrigin(p5.createVector(0, 0));

    // make sure map is in center of screen
    resizeMap();
  };

  const draw = (p5: p5Types) => {
    if (props.isMapEnabled) {
      p5.scale(scale);
      p5.translate(origin.x, origin.y);
      p5.background('#E8E8E8');
      setImg((img) => {
        img.resize(375, 500);
        return img;
      });
      p5.image(img, 0, 0);
      finishedAnimations.forEach((a) => a.drawLine());
      runAnimations(p5);
      mockPoints.forEach((p) => drawPoint(p, p5));
    }
  };

  const handleUpdate = () => {
    const nextAnimation = futureAnimations[props.currentItemIndex];
    setAnimations((animations) => [...animations, ...nextAnimation]);
  };

  React.useEffect(() => {
    if (props.currentItemIndex > animationIndex) {
      handleUpdate();
      setAnimationIndex(props.currentItemIndex);
    }
  });

  return <Sketch setup={setup} draw={draw} mouseDragged={panView} />;
}
