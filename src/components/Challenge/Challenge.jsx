import { useState, useEffect } from "react";
import {
  BsHandThumbsDown,
  BsHandThumbsUp,
  BsHandThumbsDownFill,
  BsHandThumbsUpFill,
} from "react-icons/bs";
import { PrettyBorder, Toast } from "../UI";
import "./Challenge.css";

const Challenge = ({ challenge, challenges, setChallenges, currentUser }) => {
  const currentUserName = currentUser.name;
  const { title, author, description, id, votes } = challenge;
  const [toastConfig, setToastConfig] = useState({
    show: false,
    message: "",
    type: "info",
  });
  const [currentVote, setCurrentVote] = useState(votes[currentUserName]);

  useEffect(() => {
    setCurrentVote(votes[currentUserName]);
  }, [currentUserName, votes]);

  const handleVote = (type) => {
    if (!currentUserName) {
      setToastConfig({
        show: true,
        message: "Please login to vote",
        type: "error",
      });
      return;
    }
    if (type === currentVote) {
      return;
    }
    const index = challenges.findIndex((object) => {
      return object.id === id;
    });
    challenges[index].votes[currentUserName] = type;

    setChallenges(challenges);
    setCurrentVote(challenges[index].votes[currentUserName]);
  };

  const UpVote = currentVote === "up" ? BsHandThumbsUpFill : BsHandThumbsUp;
  const DownVote =
    currentVote === "down" ? BsHandThumbsDownFill : BsHandThumbsDown;

  return (
    <PrettyBorder className="challenge-wrapper">
      <Toast setToastConfig={setToastConfig} toastConfig={toastConfig} />
      <h4>{title}</h4>
      <p className="challenge-description">{description}</p>
      <p>
        <span className="byline">By:</span>
        {author}
      </p>
      <div>
        <span className="byline">is it good?</span>
        <UpVote className="vote" onClick={() => handleVote("up")} />
        <DownVote className="vote" onClick={() => handleVote("down")} />
      </div>
      <p>
        <span className="byline">total upvotes:</span>
        <span>
          {Object.values(votes).filter((vote) => vote === "up").length}
        </span>
      </p>
      <p>
        <span className="byline">total downvotes:</span>
        <span>
          {Object.values(votes).filter((vote) => vote === "down").length}
        </span>
      </p>
    </PrettyBorder>
  );
};

export default Challenge;
