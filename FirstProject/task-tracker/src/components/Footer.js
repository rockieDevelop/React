import { Link } from "react-router-dom"

//usage of Link to not reload the page everytime we click the link (use Route)
const Footer = () => {
    return (
        <footer>
            <p>&copy; 2021</p>
            <Link to="/about">About</Link>
        </footer>
    )
}

export default Footer
