import { useState, useEffect } from "react";
import { BsHandThumbsDown, BsHandThumbsUp } from "react-icons/bs";
import { PrettyBorder } from "../UI";
import "./Challenge.css";

const Challenge = ({ challenge, challenges, setChallenges, currentUser }) => {
  const currentUserName = currentUser.name;
  const { title, author, description, id, votes } = challenge;
  const [currentVote, setCurrentVote] = useState(votes[currentUserName]);
  useEffect(() => {
    setCurrentVote(votes[currentUserName]);
  }, [currentUserName, votes]);
  const handleVote = (type) => {
    if (!currentUserName) {
      alert("login to vote");
      return;
    }
    const index = challenges.findIndex((object) => {
      return object.id === id;
    });
    challenges[index].votes[currentUserName] = type;

    setChallenges(challenges);
    setCurrentVote(challenges[index].votes[currentUserName]);
  };

  return (
    <PrettyBorder className="challenge-wrapper">
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
      <p>
        total upvotes :
        <span>
          {Object.values(votes).filter((vote) => vote === "up").length}
        </span>
      </p>
      <p>
        total downvotes :
        <span>
          {Object.values(votes).filter((vote) => vote === "down").length}
        </span>
      </p>
    </PrettyBorder>
  );
};

export default Challenge;
