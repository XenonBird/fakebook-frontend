import Search from "../../icons/Search";
import User from "../../icons/User";
import Home from "../../icons/Home";
import "./Header.css";

const Header = () => {
    return (
        <header className="Header">
            <h1>Fakebook</h1>
            <nav>
                <ul>
                    <li>
                        <Search />
                    </li>
                    <li>
                        <User />
                    </li>
                    <li>
                        <Home />
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
