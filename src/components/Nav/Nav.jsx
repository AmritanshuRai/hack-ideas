import User from "../User/User";
import "./Nav.css";
const Nav = () => {
  return (
    <header className="nav">
      <nav>
        <ul className="nav_items li-reset center">
          <li>logo</li>
          <li>Add challenge</li>
          <li>
            <User />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
