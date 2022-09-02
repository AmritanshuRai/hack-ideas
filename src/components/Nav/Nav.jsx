import User from "../User/User";
import CreateChallenge from "../CreateChallenge/CreateChallenge";
import "./Nav.css";
const Nav = ({ challengesApi, userApi }) => {
  return (
    <header className="nav">
      <nav>
        <ul className="nav_items li-reset center">
          <li>logo</li>
          <li>
            <CreateChallenge challengesApi={challengesApi} userApi={userApi} />
          </li>
          <li>
            <User userApi={userApi} />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
