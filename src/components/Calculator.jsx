import React, { useState, useEffect } from 'react';
import calculate from '../logic/calculate';
import AnswerSection from './AnswerSection';
import keysPress from '../logic/keysPress';

export default function Calculator() {
  const [result, setResult] = useState({});

  function clickedButton(e) {
    setResult(calculate(result, e.target.innerText));
  }

  useEffect(() => {
    function handleKeyDown(e) {
      e.preventDefault();
      e.stopPropagation();
      const key = keysPress(e);
      if (key) {
        setResult((result) => calculate(result, key));
      }
    }
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const buttons = [
    { label: 'AC', className: 'bg-gray-300', onClick: clickedButton },
    { label: '+/-', className: 'bg-gray-300', onClick: clickedButton },
    { label: '%', className: 'bg-gray-300', onClick: clickedButton },
    { label: '÷', className: 'bg-orange-500', onClick: clickedButton },
    { label: '7', className: 'bg-gray-300', onClick: clickedButton },
    { label: '8', className: 'bg-gray-300', onClick: clickedButton },
    { label: '9', className: 'bg-gray-300', onClick: clickedButton },
    { label: 'x', className: 'bg-orange-500', onClick: clickedButton },
    { label: '4', className: 'bg-gray-300', onClick: clickedButton },
    { label: '5', className: 'bg-gray-300', onClick: clickedButton },
    { label: '6', className: 'bg-gray-300', onClick: clickedButton },
    { label: '-', className: 'bg-orange-500', onClick: clickedButton },
    { label: '1', className: 'bg-gray-300', onClick: clickedButton },
    { label: '2', className: 'bg-gray-300', onClick: clickedButton },
    { label: '3', className: 'bg-gray-300', onClick: clickedButton },
    { label: '+', className: 'bg-orange-500', onClick: clickedButton },
    { label: '0', className: 'bg-gray-300 col-span-2', onClick: clickedButton },
    { label: '.', className: 'bg-gray-300', onClick: clickedButton },
    { label: '=', className: 'bg-orange-500', onClick: clickedButton },
  ];

  return (
    <div className="mx-auto mt-14 overflow-hidden mb-2 lg:w-2/6 md:w-3/6 sm:w-4/6">
      <div className="grid grid-cols-4 grid-flow-row bg-slate-600 border-solid border-black border-2">
        <div className="col-span-4 text-white text-3xl text-right p-5 h-24 pt-16 pb-0 mb-2">
          <AnswerSection
            output={result.total ? result.total : ''}
            nextVal={result.next ? result.next : ''}
            operation={result.operation ? result.operation : ''}
          />
        </div>
        {buttons.map((button) => (
          <button
            key={button.label}
            type="button"
            className={`h-20 flex items-center justify-center border-solid border-2 border-white ${button.className}`}
            onClick={button.onClick}
          >
            {button.label}
          </button>
        ))}
      </div>
    </div>
  );
}
