import User from "../User/User";
import CreateChallenge from "../CreateChallenge/CreateChallenge";
import "./Nav.css";
const Nav = ({ syncStorageAndState }) => {
  return (
    <header className="nav">
      <nav>
        <ul className="nav_items li-reset center">
          <li>logo</li>
          <li>
            <CreateChallenge syncStorageAndState={syncStorageAndState} />
          </li>
          <li>
            <User />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
