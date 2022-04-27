import PropTypes from 'prop-types'
import Button from './Button.js'

const Header = ({title, onAdd, showAdd}) => {
  const onClick = () => {
    console.log('click')
  }

  return (
    <header className='header'>
        <h1>{title}</h1>
        {/* if showAdd is true then change text */}
       <Button color = {showAdd ? 'red' : 'green'} text = {showAdd ? 'Close' : 'Add'} onClick={onAdd} />
       
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
