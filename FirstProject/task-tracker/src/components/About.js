import { Link } from "react-router-dom"

//usage of Link to not reload the page everytime we click the link (use Route)
const About = () => {
    return (
        <div>
            <h4>About</h4>
            <Link to="/">Back</Link>
        </div>
    )
}

export default About
