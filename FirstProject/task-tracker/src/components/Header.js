import PropTypes from 'prop-types'
import Button from './Button'
import { useLocation } from 'react-router-dom'

//we can use location to access the path

const Header = (props) => {
    const location = useLocation()

    return (
        <header className='header'>
            <h1>{props.title}</h1>
            {location.pathname === '/' && <Button color={!props.showAdd ? 'green' : 'blue'} 
                text={!props.showAdd ? 'Add' : 'Close'} 
                onClick={props.onAdd}/>}
        </header>
    )
}

Header.defaultProps = {
    title: "Task Tracker"
}

Header.propTypes = {
    title: PropTypes.string.isRequired
}

export default Header
