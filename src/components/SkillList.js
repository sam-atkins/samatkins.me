import React from 'react'
import PropTypes from 'prop-types'

const SkillList = ({ skill }) => {
  const { group, items } = skill

  return (
    <div>
      <div className='skills-box'>
        <h2>{group}</h2>
        <ul>
          {items.map(item => <li>{item.name}</li>)}
        </ul>
      </div>
    </div>
  )
}

SkillList.propTypes = {
  group: PropTypes.string,
  items: PropTypes.string
}

export default SkillList