const DropdownItem = ({children, onClick}) => {
  return (
    <div className='p-2 m-1 w-full rounded-lg cursor-pointer hover:bg-owlBeige' onClick={onClick}>
      {children}
    </div>
  )
}

export default DropdownItem