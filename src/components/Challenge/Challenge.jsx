import { BsHandThumbsDown, BsHandThumbsUp } from "react-icons/bs";
import { PrettyBorder } from "../UI";
import "./Challenge.css";

const Challenge = (props) => {
  const { title, author, description } = props.challenge;
  return (
    <PrettyBorder>
      <div>{title}</div>
      <div>{description}</div>
      <div>{author}</div>
      <div>
        <span>is it good?</span>
        <BsHandThumbsUp />
        <BsHandThumbsDown />
      </div>
    </PrettyBorder>
  );
};

export default Challenge;
