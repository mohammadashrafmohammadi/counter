import { useState } from 'react'
import './App.css'

export default function Counter () {
  const [count, setCount] = useState(0)
  const [step, setStep] = useState(1)

  function handleReset () {
    setStep(1)
    setCount(0)
  }

  const date = new Date('June 10, 2024')
  date.setDate(date.getDate() + count)

  return (
    <>
      <div className='counter'>
        <div className='buttons'>
          <input
            type='range'
            min={0}
            max={10}
            value={step}
            onChange={e => setStep(Number(e.target.value))}
          />
          <span>Step: {step}</span>
        </div>

        <div className='buttons'>
          <button onClick={() => setCount(c => c - step)}>-</button>
          <input
            type='text'
            value={count}
            onChange={e => setCount(e.target.value)}
          />
          <button onClick={() => setCount(c => c + step)}>+</button>
        </div>

        <p className='number'>
          <span>
            {count === 0
              ? 'Today is  '
              : count > 0
              ? `${count} days from today is`
              : `${Math.abs(count)} days from today was`}
          </span>
          <span> {date.toDateString()} </span>
        </p>

        {count !== 0 || step !== 1 ? (
          <button onClick={handleReset}>Reset</button>
        ) : null}
      </div>
    </>
  )
}
