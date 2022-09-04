import { useState } from "react";
import useLocalStorage from "../../hooks/useLocalStorage";
import { Modal, PrettyBorder, Toast } from "../UI";

import "./User.css";

const User = ({ userApi }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [toastConfig, setToastConfig] = useState({
    show: false,
    message: "",
    type: "info",
  });
  const [currentUser, setCurrentUser] = userApi;
  const [allUsers, setAllUsers] = useLocalStorage("allUsers", []);

  const handleRegister = (e) => {
    e.preventDefault();
    const currentUserInput = e.target.register.value;

    if (!currentUserInput) return;

    const user = allUsers.find((user) => user.name === currentUserInput);
    if (user) {
      setToastConfig({
        show: true,
        message: "User already exist. Please login or try another name",
        type: "error",
      });
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
      setToastConfig({
        show: true,
        message: "This user is not registered. Please register first",
        type: "error",
      });
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
      <Toast setToastConfig={setToastConfig} toastConfig={toastConfig} />
      <Modal
        handleClose={() => setIsOpen(false)}
        isOpen={isOpen}
        className="form-wrapper"
      >
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
