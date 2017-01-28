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
      xmlns='http://www.w3.org/2000/svg'
      version='1.1'
      className='relative align-middle circle border'
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

const Cards = ({ cards, rand, ...rest }) => (
  <div className='clearfix mx1 mb3'>
    {cards.map((c, i) => (
      <div key={i} className='col col-6 px1'>
        <Card card={c} rand={rand[i]} {...rest} />
      </div>
    ))}
  </div>
)

export default Cards
