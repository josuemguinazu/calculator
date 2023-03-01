import { Buttons } from './Buttons';
import { Clear } from './Clear';
import { Display } from './Display';
import { useState } from 'react';
import { evaluate } from 'mathjs';

export const Calculator = () => {
  const [input, setInput] = useState('');

  const addInput = (val) => {
    setInput(input + val);
  };

  const calculateResult = () => {
    if (input) {
      setInput(evaluate(input));
    } else {
      alert('Please select numbers to make an operation');
    }
  };

  const clear = () => {
    setInput('');
  };
  return (
    <>
      <h1 className='title'>Calculator project</h1>
      <div className='CalculatorContainer'>
        <div className='display'>
          <Display input={input} />
        </div>
        <div className='row'>
          <Buttons handleClick={addInput} btn={7} />
          <Buttons handleClick={addInput} btn={8} />
          <Buttons handleClick={addInput} btn={9} />
          <Buttons handleClick={addInput} btn={'+'} />
        </div>
        <div className='row'>
          <Buttons handleClick={addInput} btn={4} />
          <Buttons handleClick={addInput} btn={5} />
          <Buttons handleClick={addInput} btn={6} />
          <Buttons handleClick={addInput} btn={'-'} />
        </div>
        <div className='row'>
          <Buttons handleClick={addInput} btn={1} />
          <Buttons handleClick={addInput} btn={2} />
          <Buttons handleClick={addInput} btn={3} />
          <Buttons handleClick={addInput} btn={'*'} />
        </div>
        <div className='row'>
          <Buttons handleClick={addInput} btn={0} />
          <Buttons handleClick={addInput} btn={'.'} />
          <Buttons handleClick={addInput} btn={'%'} />
          <Buttons handleClick={addInput} btn={'/'} />
        </div>
        <div className='resBtn'>
          {/* <Buttons btn={'='} /> */}
          <Clear clear={clear} />
          <div onClick={calculateResult} className='res'>
            =
          </div>
        </div>
      </div>
      <div className='Footer'>
        <div class='icons'>
          <a href='https://www.instagram.com/jmgcode90/'>
            <i class='fa-brands fa-instagram icon'></i>
          </a>
          <h2 class='icon sign'>jmgDev</h2>
          <a href='https://github.com/josuemguinazu'>
            <i class='fa-brands fa-github icon'></i>
          </a>
        </div>
      </div>
    </>
  );
};
