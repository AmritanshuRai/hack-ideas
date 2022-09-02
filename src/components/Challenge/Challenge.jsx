import { useState } from "react";
import { BsHandThumbsDown, BsHandThumbsUp } from "react-icons/bs";
import useLocalStorage from "../../hooks/useLocalStorage";
import { PrettyBorder } from "../UI";
import "./Challenge.css";

const Challenge = (props) => {
  const { title, author, description, id, votes } = props.challenge;

  const [challenges, setChallenges] = useLocalStorage("challenges", []);
  const [currentUser] = useLocalStorage("currentUser");
  const [currentVote, setCurrentVote] = useState(votes[currentUser.name]);

  const handleVote = (type) => {
    const index = challenges.findIndex((object) => {
      return object.id === id;
    });
    challenges[index].votes[currentUser.name] = type;

    setChallenges(challenges);
    setCurrentVote(challenges[index].votes[currentUser.name]);
  };

  return (
    <PrettyBorder>
      <div>{title}</div>
      <div>{description}</div>
      <div>{author}</div>
      <div>
        <span>is it good?</span>
        <BsHandThumbsUp
          className={`${currentVote === "up" ? "up" : "normal"}`}
          onClick={() => handleVote("up")}
        />
        <BsHandThumbsDown
          className={`${currentVote === "down" ? "down" : "normal"}`}
          onClick={() => handleVote("down")}
        />
      </div>
    </PrettyBorder>
  );
};

export default Challenge;
