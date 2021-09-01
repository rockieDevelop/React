import PropTypes from 'prop-types'
import Button from './Button'

const Header = (props) => {
    return (
        <header className='header'>
            <h1>{props.title}</h1>
            <Button color={!props.showAdd ? 'green' : 'blue'} text={!props.showAdd ? 'Add' : 'Close'} onClick={props.onAdd}/>
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
