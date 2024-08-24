import React from 'react'

const DropdownContent = ({children, open, toggle}) => {
    return (
      <div className={`absolute w-full top-8 p-4 bg-backgroundColor rounded-b-lg shadow cursor-pointer overflow-y-auto ${open ? 'block' : 'hidden'}`}>
        <div onClick={toggle} className="flex flex-col text-center">
          {children}
        </div>
      </div>
    )
  }

export default DropdownContent
