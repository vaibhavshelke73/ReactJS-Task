import {Link} from 'react-router-dom'
import classes from "./Header.module.css";

const Header = () => {
    return(
        <header className={classes.header}>
            <nav>
                <ul>
                    <li>
                        <Link to="/customers">
                            Customer
                        </Link>
                    </li>
                    <li>
                        <Link to="/Products">
                            products
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
export default Header;