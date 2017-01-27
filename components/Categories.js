import React from 'react'


const CategoryItem = ({ category, selected, onClick }) => {
  const { key, name, img } = category
  const _onClick = () => onClick(key)

  return (
    <button
      type='button'
      className={`mb1 mr1 btn btn-outline px1 py0 h5 ${key !== selected ? 'regular' : ''}`}
      onClick={_onClick}
    >
      {name}
    </button>
  )
}

const Categories = ({ categories, ...rest }) => (
  <div className='mb3'>
    <h3>Select a category</h3>
    {categories.map(c =>
      <CategoryItem key={c.key} category={c} {...rest} />
    )}
  </div>
)

export default Categories
