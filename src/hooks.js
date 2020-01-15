import React, { useState } from 'react';

// For each exercice, name your component following this rule:
// Exercice 1 -> Ex1
// Exercice 2 -> Ex2 
// ...

// Start from this component
const Base = function() {
    return (
    <div>
      <p>Hello 世界</p>
      <button>
        Translation please
      </button>
    </div>
  )
}

// Exercice 1
// Since Japanese is not everyoby's forte, 
// Write a component that changes the text to "Hello World" 
// Note: The initial value should be what is set in the 
// Base component

const Ex1 = function() {
    const [text, setText] = useState('Hello 世界')
    return (
        <div>
          <p>{text}</p>
          <button onClick={() => setText('Hello World')}>
            Translation please
          </button>
        </div>
    )
}

// Exercice 2
// Now, your japanese friend is lost.. Make it so that 
// By clicking on the button again the original text 
// is displayed again

const Ex2 = function() {
    const text = ['Hello 世界', 'Hello World']
    const [idx, setIdx] = useState(0)
    return (
        <div>
          <p>{text[idx]}</p>
          <button onClick={() => {
            if (idx === 0) {
                setIdx(1)
            } else {
                setIdx(0)
            }
          }}>
            Translation please
          </button>
        </div>
    )
}


// Exercice 3
// If you click a third time, can you read the text?
// If not, make it so that if we click on the button
// it always changes the text to the other language (the text toggles)

const Ex3 = function() {
    const text = ['Hello 世界', 'Hello World']
    const [idx, setIdx] = useState(0)
    return (
        <div>
          <p>{text[idx]}</p>
          <button onClick={() => {
            if (idx === 0) {
                setIdx(1)
            } else {
                setIdx(0)
            }
          }}>
            Translation please
          </button>
        </div>
    )
}

// Exercice 4
// Now, update the button's text so that it indicates
// which language it will translate to
// If Japanese is displayed, the button must say "Translation to english please"
// When English is diplayed, the button must say "Translation to japanese please"
// The toggle functionality should still be there.

const Ex4 = function() {
    const lang = ['english', 'japanese']
    const text = ['Hello 世界', 'Hello World']
    const [idx, setIdx] = useState(0)
    return (
        <div>
          <p>{text[idx]}</p>
          <button onClick={() => {
            if (idx === 0) {
                setIdx(1)
            } else {
                setIdx(0)
            }
          }}>
            Translation to {lang[idx]} please
          </button>
        </div>
    )
}

// --------------
// put in separate file maybe

const Base2 = function() {
    return (
    <div>
      <p>1</p>
      <button>
        Click me!
      </button>
    </div>
  )
}

// Exercice 5
// Write a component that adds 1 to the p tag value on each click
// The p tag should start at 0

const Ex5 = function() {
    const [count, setCount] = useState(0)
    return (
        <div>
          <p>{count}</p>
          <button onClick={() => setCount(count+1)}>
            Click me!
          </button>
        </div>
    )
}

// Exercice 6
// Write a component that displays the next value
// in the fibonacci serie when we click on the button
// the fibonacci serie is as follows 0,1,1,2,3,5,8,13,21,...
// Got the logic?
// No? too bad...

const Ex6 = function() {
    const [fib, setFib] = useState([0,1])
    return (
        <div>
          <p>{fib[0]}</p>
          <button onClick={() => setFib([fib[1], fib[0]+fib[1]])}>
            Click me!
          </button>
        </div>
    )
}

// Exercice x
// Write a component that changes text to a passed down prop


export { Ex1, Ex2, Ex3, Ex4, Ex5, Ex6 };
