import React from 'react'

import { rand, shuffle } from '../util'

const card_config = {
  size: 400,
  positions: [
    {"x":140.16,"y":200.3,"r":31.77,"size":44.92},
    {"x":316,"y":249.86,"r":73.36,"size":103.74},
    {"x":189.51,"y":302.19,"r":63.53,"size":89.85},
    {"x":68.64,"y":146.07,"r":58,"size":82.02},
    {"x":74.86,"y":261.89,"r":58,"size":82.02},
    {"x":279.96,"y":107.64,"r":73.36,"size":103.74},
    {"x":212.93,"y":200.3,"r":41.01,"size":58},
    {"x":166.71,"y":132.55,"r":41.01,"size":58},
  ],
}

const Card = ({ card }) => {
  const { size, positions } = card_config
  shuffle(card)

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
              transform={`scale(1.1)rotate(${rand()})`}
              href={`img/food/${card[i]}.svg`}
              title={card[i]}
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
