import React, { useState, useEffect } from 'react';
import getSelectedText  from '../utils/saveSelection';

  const TextSelectionDashboard = () => {

  const [message, setMessage ] = useState('')
  const [selectedText, setSelectedText] = useState('')
  console.log('selectedText',selectedText);
  const useMouseUp = callback => {
    useEffect(() => {
      window.addEventListener('mouseup', callback);
      return () => window.removeEventListener('mouseup', callback);
    }, [callback]);
  };

    const handleEvent = async(event, selectedText) => {
      console.log('event',event)
      if (event.type === 'mousedown') {
          setMessage('mouse down')
         } else {
          setMessage('mouse up')
          // can't get data
          getSelectedText()
          setSelectedText(selectedText)
         }
     }

  return (
    <div onMouseUp={handleEvent}>
      <h1>some text about cats</h1>
      <p>{JSON.stringify(message)}</p>
      <p>{JSON.stringify(selectedText)}</p>
    </div>
  )
}

export default TextSelectionDashboard;
