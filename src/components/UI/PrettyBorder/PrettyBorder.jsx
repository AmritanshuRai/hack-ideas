import "./PrettyBorder.css";
const PrettyBorder = ({ children, className }) => {
  return <div className={`prettyBorder ${className}`}>{children}</div>;
};

export default PrettyBorder;
