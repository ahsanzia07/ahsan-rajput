import React, { useState } from 'react';
import './style.css';

let Box = ({ color }) => (
  <div style={{ background: color, height: 100, width: 100, margin: 20 }} />
);

export default function Internship() {
  let [boxes, setBoxes] = useState([]);

  function addBox() {

    let color = prompt('Enter colour you want to add');
    setBoxes([...boxes,{ color }]);
  }

  function removeBox() {
    let delColor = prompt('enter color to delete');

    setBoxes(boxes.filter(({ color }) => color != delColor));
  }





  return (
    <div className="parentDiv">
      <button className="button1" onClick={addBox}>
        Add Box
      </button>
      <br />
      <button className="button2" onClick={removeBox}>
        Remove Box
      </button>
      {
      
      boxes.map(box => (  <Box color={box.color} />  ) )
      
      }
    </div>
  );
}
