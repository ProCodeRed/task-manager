import React from 'react'
import Button from './Button'

const Header = ({title, onAdd, showAdd}) => {
  return (
    <header className='header'>
        <h1>{title}</h1>
        <Button title={showAdd ? 'Close': 'Add'} color={'green'} onClick={onAdd} />
    </header>
  )
}

Header.defaultProps = {
    title: 'Task Manager App'
}

export default Header