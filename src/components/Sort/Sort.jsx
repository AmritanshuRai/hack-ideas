const Sort = ({ dispatch }) => {
  const handleChange = (e) => {
    dispatch({ type: e.target.value });
  };
  return (
    <select onChange={handleChange}>
      <option value="NEWEST">newest</option>
      <option value="OLDEST">oldest</option>
      <option value="MOST_UPVOTES">Most upvotes</option>
      <option value="MOST_DOWNVOTES">Most downvotes</option>
    </select>
  );
};

export default Sort;
