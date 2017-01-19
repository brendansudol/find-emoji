import React from 'react'

const CategoryNavItem = ({ category, selected, onClick }) => {
  const _onClick = () => onClick(category)

  return (
    <button
      type='button'
      className={`mr1 btn ${category === selected ? 'btn-primary' : 'btn-outline'}`}
      onClick={_onClick}
    >
      {category}
    </button>
  )
}

const CategoryNav = ({ categories, ...rest }) => (
  <div className='mb2'>
    {categories.map((c, i) => 
      <CategoryNavItem key={i} category={c} {...rest} />
    )}
  </div>
)

export default CategoryNav
