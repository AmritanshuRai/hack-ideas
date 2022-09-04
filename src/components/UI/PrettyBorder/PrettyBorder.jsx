import "./PrettyBorder.css";
const PrettyBorder = ({ children, className, type = "info" }) => {
  return (
    <div
      style={{
        "--prettyBorder-background": `${
          type === "info"
            ? "linear-gradient(127deg, #59d102 -4%, #f3f520 108%)"
            : "linear-gradient(-45deg, #f89b29 0%, #ff0f7b 100% )"
        }`,
      }}
      className={`prettyBorder ${className}`}
    >
      {children}
    </div>
  );
};

export default PrettyBorder;
