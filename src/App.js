import React, { useState } from "react";
import P5Wrapper from "react-p5-wrapper";

function App() {
  const [rotation, setRotation] = useState(0);
  const sketch = (p5) => {
    p5.setup = () => p5.createCanvas(600, 400, p5.WEBGL);

    p5.myCustomRedrawAccordingToNewPropsHandler = (props) => {
      if (props.rotation) setRotation((props.rotation * Math.PI) / 180);
    };

    p5.draw = () => {
      p5.background(100, 85, 0, 20);
      p5.normalMaterial();
      p5.noStroke();
      p5.push();
      p5.rotateY(50);
      p5.box(150);
      p5.pop();
    };
  };

  return <P5Wrapper sketch={sketch} rotation={rotation} />;
}

export default App;
