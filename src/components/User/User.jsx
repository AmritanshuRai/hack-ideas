import { useState } from "react";
import useLocalStorage from "../../hooks/useLocalStorage";
import { Modal, PrettyBorder } from "../UI";
const User = ({ userApi }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentUser, setCurrentUser] = userApi;
  const [allUsers, setAllUsers] = useLocalStorage("allUsers", []);

  const handleRegister = (e) => {
    e.preventDefault();
    const currentUserInput = e.target.register.value;

    if (!currentUserInput) return;

    const user = allUsers.find((user) => user.name === currentUserInput);
    if (user) {
      alert("User already exist. Try another name");
      return;
    }

    setCurrentUser({ name: currentUserInput });
    setAllUsers([...allUsers, { name: currentUserInput }]);
    setIsOpen(false);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const currentUserInput = e.target.login.value;

    if (!currentUserInput) return;

    const user = allUsers.find((user) => user.name === currentUserInput);
    if (!user) {
      alert("This user is not registered. Please register");
      return;
    }
    setCurrentUser(user);
    setIsOpen(false);
  };

  return (
    <>
      {currentUser.name ? (
        <PrettyBorder className="prettyBorder-cta">
          <button
            onClick={() =>
              setCurrentUser({
                name: "",
              })
            }
          >
            Welcome, {" " + currentUser.name}
          </button>
        </PrettyBorder>
      ) : (
        <PrettyBorder className="prettyBorder-cta">
          <button onClick={() => setIsOpen(true)}>Login</button>
        </PrettyBorder>
      )}

      <Modal handleClose={() => setIsOpen(false)} isOpen={isOpen}>
        <form onSubmit={handleRegister}>
          <p>New User?</p>
          <input name="register" type="text" />
          <button>Register</button>
        </form>
        <form onSubmit={handleLogin}>
          <p>Existing User?</p>
          <input name="login" type="text" />
          <button>Login</button>
        </form>
      </Modal>
    </>
  );
};
export default User;
