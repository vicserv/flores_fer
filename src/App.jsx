import React, { useState } from 'react';
import './App.css';

function App() {
  const [color, setColor] = useState('yellow');

  const changeColor = () => {
    setColor(color === 'yellow' ? 'orange' : 'yellow');
  };

  return (
    <div className='flower'>
    <div className='text-above'>De Amaury</div>
    <div className="mid"/>
    <div className="Petal1 p1" />
    <div className="Petal1 p2" />
    <div className="Petal1 p3" />
    <div className="Petal1 p4" />
    <div className="Petal2 p1" />
    <div className="Petal2 p2" />
    <div className="Petal2 p3" />
    <div className="Petal2 p4" />
    <div className="Petal3 p1" />
    <div className="Petal3 p2" />
    <div className="Petal3 p3" />
    <div className="Petal3 p4" />
    <div className='text-below'>Para Fer</div>
    {/* text small */}
    <div className='text-small'>Como simbolo de lo que florece en mi corazon al persar en ti</div>

    
    </div>
    
  );
}

export default App;
