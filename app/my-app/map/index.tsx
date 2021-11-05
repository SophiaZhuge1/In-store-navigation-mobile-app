import React from 'react';
import Sketch from 'react-p5';
import p5Types from 'p5'; //Import this for typechecking and intellisense
import { Dimensions } from 'react-native';
import favicon from '../assets/images/favicon.png';

interface ComponentProps {
  //Your component props
}

export default function MapCanvas() {
  let img: p5Types.Image;

  //See annotations in JS for more information
  const setup = (p5: p5Types, canvasParentRef: Element) => {
    const { width } = Dimensions.get('window');
    p5.createCanvas(width, 500).parent(canvasParentRef);
    img = p5.loadImage(favicon);
  };

  const draw = (p5: p5Types) => {
    p5.background(0);
    p5.image(img, 50, 50);
  };

  return <Sketch setup={setup} draw={draw} />;
}
