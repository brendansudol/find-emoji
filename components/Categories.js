import React from 'react'


const CategoryItem = ({ category, selected, onClick }) => {
  const { key, name, img } = category
  const _onClick = () => onClick(key)

  return (
    <button
      type='button'
      className={`mb1 mr1 btn btn-outline px1 py0 h6 ${key !== selected ? 'regular' : ''}`}
      onClick={_onClick}
    >
      <img src={`img/${key}/${img}.svg`} width='25' className='mr1 align-middle' />
      {name}
    </button>
  )
}

const Categories = ({ categories, ...rest }) => (
  <div className='mb3'>
    <div className='mb1 bold'>Select a category:</div>
    {categories.map(c =>
      <CategoryItem key={c.key} category={c} {...rest} />
    )}
  </div>
)

export default Categories
