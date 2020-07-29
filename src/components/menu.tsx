import { Link } from 'react-router5'

export default (props) => {
    return (
        <nav>
            <Link routeName="home">Home</Link>
            <Link routeName="about">About</Link>
        </nav>
    )
}
