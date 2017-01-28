import React from 'react'

import Stat from './Stat'
import Timer from './Timer'


const Scoreboard = ({ began, finished, remaining, correct, wrong }) => (
  <div className='clearfix center'>
    <div className='col col-6 sm-col-3 mb2'>
      <Timer began={began} finished={finished} />
    </div>
    <div className='col col-6 sm-col-3 mb2'>
      <Stat label='Remaining' value={remaining} />
    </div>
    <div className='col col-6 sm-col-3 mb2'>
      <Stat label='Correct' value={correct} />
    </div>
    <div className='col col-6 sm-col-3 mb2'>
      <Stat label='Wrong' value={wrong} />
    </div>
  </div>
)

export default Scoreboard
