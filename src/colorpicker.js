import React, { useState } from 'react';
import './colorpicker.css'; // Import your CSS file for styling

const colors = [
  { name: 'Red', hex: '#FF0000' },
  { name: 'Green', hex: '#00FF00' },
  { name: 'Blue', hex: '#0000FF' },
  { name: 'Yellow', hex: '#FFFF00' },
  { name: 'Purple', hex: '#800080' },
  { name: 'Orange', hex: '#FFA500' },
  { name: 'Pink', hex: '#FFC0CB' },
  { name: 'Teal', hex: '#008080' },
  { name: 'Brown', hex: '#A52A2A' },
  { name: 'Gray', hex: '#808080' }
];

const ColorPicker = () => {
  const [selectedColor, setSelectedColor] = useState('');
  const [pickedColor, setPickedColor] = useState('');

  const handleColorClick = (color) => {
    setSelectedColor(color.name);
  };

  const handlePickColor = () => {
    setPickedColor(selectedColor);
  };

  return (
    <div className="color-picker">
      {selectedColor && <div className='Heading'>{selectedColor} color</div>}
      <div className="color-display" style={{ backgroundColor: pickedColor }}>
        <div className="color-list">
          {colors.map((color, index) => (
            <div
              key={index}
              className="color-option"
              style={{ backgroundColor: color.hex }}
              onClick={() => handleColorClick(color)}
            >
              {color.name}
            </div>
          ))}
        </div>
        <button className="pick-button" onClick={handlePickColor}>
          Pick a Color
        </button>
      </div>
    </div>
  );
};

export default ColorPicker;
