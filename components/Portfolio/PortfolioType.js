import React from 'react'

const PortfolioType = ({ type, active, toggleActive }) => {
  return (
    <button
      className={`flex shrink-0 select-none items-center justify-center rounded-full border-2 border-main px-4 py-1 text-base text-main focus-visible:bg-main focus-visible:text-secondary
    ${
      active ? 'bg-main text-secondary' : 'bg-secondary text-main'
    } outline-none`}
      onClick={() => toggleActive(type)}
    >
      {type}
    </button>
  )
}

export default PortfolioType
