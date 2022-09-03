import User from "../User/User";
import CreateChallenge from "../CreateChallenge/CreateChallenge";
import "./Nav.css";
const Nav = ({ challengesApi, userApi }) => {
  return (
    <nav className="nav">
      <span className="logo">Hack Ideas</span>
      <div>
        <CreateChallenge challengesApi={challengesApi} userApi={userApi} />
        <User userApi={userApi} />
      </div>
    </nav>
  );
};

export default Nav;
