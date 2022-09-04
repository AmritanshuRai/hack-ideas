import { useState } from "react";
import { v4 as uuid } from "uuid";
import { Modal, PrettyBorder } from "../UI";

import "./CreateChallenge.css";

const CreateChallenge = ({ challengesApi, userApi }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentUser] = userApi;
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
        createdAt: new Date(),
      },
    ]);
    setIsOpen(false);
  };

  const handleAddChallenge = () => {
    if (!currentUser.name) {
      alert("Please login to add challenge");
      return;
    }

    setIsOpen(true);
  };
  return (
    <>
      <PrettyBorder className="prettyBorder-cta challenge-cta">
        <button onClick={handleAddChallenge}>Add Challenge</button>
      </PrettyBorder>

      <Modal
        handleClose={() => setIsOpen(false)}
        isOpen={isOpen}
        className="form-wrapper create-challenge"
      >
        <p>Create new Challenge</p>
        <form className="center" onSubmit={handleSubmit}>
          <p>Enter title</p>
          <input name="title" type="text" />
          <p>Enter description</p>
          <textarea name="description" />
          <p>Choose a tag</p>
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
