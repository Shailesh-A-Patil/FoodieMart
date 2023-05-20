import { APP_LOGO } from "../utility/constants";

const Header = () => {
    return (
        <div id="header">
            <div className="app-logo">
            <img src = {APP_LOGO} alt="App Logo"></img>
            </div>
            <div className="nav-items">
                <ul>
                    <li>About</li>
                    <li>Profile</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

export default Header;