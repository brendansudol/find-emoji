import React from 'react'

import { rand, shuffle } from '../util'

const Card = ({ card, things }) => {
  const { size, positions } = card
  shuffle(things)

  return (
    <svg
      className='align-middle border circle'
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      style={{ width: '100%', height: '100%' }}
    >
      <g transform={`rotate(${rand()}, ${size / 2}, ${size / 2})`}>
        {positions.map((d, i) => (
          <g key={i} transform={`translate(${d.x}, ${d.y})`}>
            <image
              transform={`scale(1.2)rotate(${rand()})`}
              href={`img/animals/${things[i]}.svg`}
              x={-d.size / 2}
              y={-d.size / 2}
              width={d.size}
              height={d.size}
            />
          </g>
        ))}
      </g>
    </svg>
  )
}

export default Card
