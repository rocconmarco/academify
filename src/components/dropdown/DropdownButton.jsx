import { ChevronDown, ChevronUp } from 'lucide-react'
import React from 'react'

const DropdownButton = ({children, open, toggle}) => {
  return (
    <div onClick={toggle}>
      {children}<span className='flex items-center justify-center ml-4'>{!open ? <img
              className="h-12 absolute -top-6 right-2"
              src="./burger-menu-icon.png"
            /> : <img
            className="h-10 absolute -top-5 right-3"
            src="./close-hamburger-menu-icon.png"
          />}</span>
    </div>
  )
}

export default DropdownButton
