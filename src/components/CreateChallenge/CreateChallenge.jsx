import { useState } from "react";
import { v4 as uuid } from "uuid";
import useLocalStorage from "../../hooks/useLocalStorage";
import Modal from "../UI/Modal/Modal";
const CreateChallenge = ({ challengesApi, userApi }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentUser, setCurrentUser] = userApi;
  const [challenges, setChallenges] = challengesApi;

  const handleSubmit = (e) => {
    e.preventDefault();
    const { description, title, tag } = e.target;
    setChallenges([
      ...challenges,
      {
        description: description.value,
        title: title.value,
        tag: tag.value,
        author: currentUser.name,
        votes: {},
        id: uuid(),
      },
    ]);
    setIsOpen(false);
  };

  return (
    <>
      <button onClick={() => setIsOpen(true)}>Add Challenge</button>

      <Modal handleClose={() => setIsOpen(false)} isOpen={isOpen}>
        <p>Create new Challenge</p>
        <form className="center" onSubmit={handleSubmit}>
          <input name="title" type="text" />
          <textarea name="description" />
          <select name="tag">
            {["feature", "tech", "science", "art", "code"].map((tag) => (
              <option key={tag}>{tag}</option>
            ))}
          </select>
          <button>Create</button>
        </form>
      </Modal>
    </>
  );
};
export default CreateChallenge;
