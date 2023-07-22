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
        <button type="button" className="bg-gray-300 h-20 flex items-center justify-center border-solid border-2 border-white" onClick={clickedButton}>
          AC
        </button>
        <button type="button" className="bg-gray-300 h-20 flex items-center justify-center border-solid border-2 border-white" onClick={clickedButton}>
          +/-
        </button>
        <button type="button" className="bg-gray-300 h-20 flex items-center justify-center border-solid border-2 border-white" onClick={clickedButton}>
          %
        </button>
        <button type="button" className="bg-orange-500 h-20 flex items-center justify-center border-solid border-2 border-white" onClick={clickedButton}>
          ÷
        </button>
        <button type="button" className="bg-gray-300 h-20 flex items-center justify-center border-solid border-2 border-white" onClick={clickedButton}>
          7
        </button>
        <button type="button" className="bg-gray-300 h-20 flex items-center justify-center border-solid border-2 border-white" onClick={clickedButton}>
          8
        </button>
        <button type="button" className="bg-gray-300 h-20 flex items-center justify-center border-solid border-2 border-white" onClick={clickedButton}>
          9
        </button>
        <button type="button" className="bg-orange-500 h-20 flex items-center justify-center border-solid border-2 border-white" onClick={clickedButton}>
          x
        </button>
        <button type="button" className="bg-gray-300 h-20 flex items-center justify-center border-solid border-2 border-white" onClick={clickedButton}>
          4
        </button>
        <button type="button" className="bg-gray-300 h-20 flex items-center justify-center border-solid border-2 border-white" onClick={clickedButton}>
          5
        </button>
        <button type="button" className="bg-gray-300 h-20 flex items-center justify-center border-solid border-2 border-white" onClick={clickedButton}>
          6
        </button>
        <button type="button" className="bg-orange-500 h-20 flex items-center justify-center border-solid border-2 border-white" onClick={clickedButton}>
          -
        </button>
        <button type="button" className="bg-gray-300 h-20 flex items-center justify-center border-solid border-2 border-white" onClick={clickedButton}>
          1
        </button>
        <button type="button" className="bg-gray-300 h-20 flex items-center justify-center border-solid border-2 border-white" onClick={clickedButton}>
          2
        </button>
        <button type="button" className="bg-gray-300 h-20 flex items-center justify-center border-solid border-2 border-white" onClick={clickedButton}>
          3
        </button>
        <button type="button" className="bg-orange-500 h-20 flex items-center justify-center border-solid border-2 border-white" onClick={clickedButton}>
          +
        </button>
        <button type="button" className="bg-gray-300 h-20 col-span-2 flex items-center justify-center border-solid border-2 border-white" onClick={clickedButton}>
          0
        </button>
        <button type="button" className="bg-gray-300 h-20 flex items-center justify-center border-solid border-2 border-white" onClick={clickedButton}>
          .
        </button>
        <button type="button" className="bg-orange-500 h-20 flex items-center justify-center border-solid border-2 border-white" onClick={clickedButton}>
          =
        </button>
      </div>
    </div>
  );
}
