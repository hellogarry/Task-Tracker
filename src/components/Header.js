import PropTypes from 'prop-types'
import Button from './Button.js'

import React from 'react'
import { useLocation } from 'react-router-dom'




const Header = ({title, onAdd, showAdd}) => {
/*   const onClick = () => {
    console.log('click')
  } */

  const location = useLocation()

  return (
    <header className='header'>
        <h1>{title}</h1>

        {location.pathname === '/' && (
          /* if showAdd is true then change text */
          <Button color = {showAdd ? 'red' : 'green'} text = {showAdd ? 'Close' : 'Add'} onClick={onAdd} />
        )}
        
       
       
    </header>
  )
}

Header.defaultProps ={
    title: 'Task Trackers',
}

Header.propTypes = {
    title: PropTypes.string,
}

//For CSS style = {headingStyle}
/* const headingStyle = {
  backgroundColor: 'black',
  color: 'white',
} */
export default Header
