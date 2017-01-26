import React from 'react'


const Stat = ({ label, value }) => (
  <div>
    <div className='h5'>{label}</div>
    <div className='monospace h1 bold line-height-2'>{value}</div>
  </div>
)

export default Stat
