
import React, { useState } from 'react';


function Body() {
  
  const [inputValue, setInputValue] = useState('');
  const [spans, setSpans] = useState([]);

  const handleAddSpan = () => {
    if (inputValue.trim() === '') return;
    setSpans([...spans, { text: inputValue, checked: false }]);
    setInputValue('');
  };

  const handleCheckboxChange = (index) => {
    const updatedSpans = [...spans];
    updatedSpans[index].checked = !updatedSpans[index].checked;

    // Move the checked item to the end
    const reordered = [
      ...updatedSpans.filter(span => !span.checked),
      ...updatedSpans.filter(span => span.checked),
    ];

    setSpans(reordered);
  };
  return (
    
    <div className="p-4 bg-[url('/public/bg.jpg')] bg-cover h-full">
      <input
        type="text"
        value={inputValue}
        placeholder="Enter Task"
        onChange={(e) => setInputValue(e.target.value)}
        className="border-2 border-green-600 px-2 py-1 rounded mr-2"
      />

      <button
        onClick={handleAddSpan}
        className="bg-green-600 text-white px-4 py-1 rounded hover:bg-green-800 "
      >
        Add
      </button>

      <div className="mt-4 flex flex-col gap-2">
        {spans.map((span, index) => (
          <label key={index} className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={span.checked}
              onChange={() => handleCheckboxChange(index)}
            />
            <span className={`${span.checked ? 'line-through text-green-600' : 'text-black text-2xl '} font-medium`}>
              {span.text}
            </span>
          </label>
        ))}
      </div>
    </div>

  );
}

export default Body;