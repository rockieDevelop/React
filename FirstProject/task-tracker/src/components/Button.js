const Button = (props) => {
    return (
        <button style={{ backgroundColor:props.color }} 
        className='btn'>{props.text}</button>
    )
}

export default Button
