import React from 'react'

import { rand, shuffle } from '../util'

const Card = ({ card, smileys }) => {
  const { size, positions } = card
  shuffle(smileys)

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
            <circle r={d.r} fill='none' stroke='#000' />
            <circle r='3' fill='#000' />
            <rect
              transform={`rotate(${rand()})`}
              x={-d.size / 2}
              y={-d.size / 2}
              width={d.size}
              height={d.size}
              fill='none'
              stroke='#000'
            />
            <image
              transform={`rotate(${rand()})`}
              href={`img/smiley/${smileys[i]}.png`}
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
