import React from 'react'


const Results = ({ correct, wrong }) => (
  <div className='mt2 p2 h3 bg-darken-1 rounded'>
    🎉 You got {correct} out of {correct + wrong} correct!&nbsp;
    <a href='#!' className='underline'>Tweet score</a>
  </div>
)

export default Results
