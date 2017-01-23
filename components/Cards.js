import React from 'react'


const CardImage = ({ pos, item, match, rand, guessed, category, onClick }) => {
  const _onClick = () => onClick(item, match)

  return (
    <g transform={`translate(${pos.x}, ${pos.y})`}>
      {guessed && item === match && (
        <rect
          transform={`scale(1.15)rotate(${-rand})`}
          x={-pos.size / 2}
          y={-pos.size / 2}
          width={pos.size}
          height={pos.size}
          fill='none'
          stroke='limegreen'
          strokeWidth='2'
        />
      )}
      <image
        transform={`scale(1.1)rotate(${-rand})`}
        href={`img/${category}/${item}.svg`}
        alt={item}
        x={-pos.size / 2}
        y={-pos.size / 2}
        width={pos.size}
        height={pos.size}
        onClick={_onClick}
      />
    </g>
  )
}

const Card = ({ card, card_config, rand, ...rest }) => {
  const { size, positions } = card_config

  return (
    <svg
      className='align-middle border circle'
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      style={{ width: '100%', height: '100%' }}
    >
      <g transform={`rotate(${rand}, ${size / 2}, ${size / 2})`}>
        {positions.map((d, i) =>
          <CardImage key={i} pos={d} item={card[i]} rand={rand} {...rest} />
        )}
      </g>
    </svg>
  )
}

const Cards = ({ cards, ...rest }) => (
  <div className='clearfix mb2 mx1'>
    {cards.map((c, i) => (
      <div key={i} className='col col-6 md-col-4 px1'>
        <Card card={c} {...rest} />
      </div>
    ))}
  </div>
)

export default Cards
