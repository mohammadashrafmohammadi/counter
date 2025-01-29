import { useState } from 'react'
import './App.css' 

export default function Counter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const date = new Date('June 10, 2024');
  date.setDate(date.getDate() + count);

  return (
    <>
      <div className='counter'>
        <div className='buttons'>
          <button onClick={() => setStep(c => c - 1)}>-</button>
          <span>Count: {step}</span>
          <button onClick={() => setStep(c => c + 1)}>+</button>
        </div>

        <div className='buttons'>
          <button onClick={() => setCount(c => c - step)}>-</button>
          <span>Count: {count}</span>
          <button onClick={() => setCount(c => c + step)}>+</button>
        </div>

        <p className='number'>
          <span>
            {count === 0
              ? 'Today is  '
              :  count > 0
              ? `${count} days from today is`
              : `${Math.abs(count)} days from today was`}
          </span>
          <span> {date.toDateString()} </span>
        </p>
      </div>
    </>
  );
}