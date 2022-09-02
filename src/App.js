import { useReducer, useEffect } from "react";
import { Nav, Challenge, Sort } from './components';
import useLocalStorage from './hooks/useLocalStorage';

import './App.css';

function reducer(state, action) {

  switch (action.type) {
    case "OLDEST":
      return [...state].sort((a, b) => {
        return new Date(a.createdAt) - new Date(b.createdAt);
      });
    case "MOST_UPVOTES":
      return [...state].sort((a, b) => {
        const aValue = Object.values(a.votes).filter(x => x === 'up').length;
        const bValue = Object.values(b.votes).filter(x => x === 'up').length;
        return bValue - aValue;
      });
    case "MOST_DOWNVOTES":
      return [...state].sort((a, b) => {
        const aValue = Object.values(a.votes).filter(x => x === 'down').length;
        const bValue = Object.values(b.votes).filter(x => x === 'down').length;
        return bValue - aValue;
      });
    case "NEWEST":
      let values = action.payload ?? state;
      return [...values].sort((a, b) => {
        return new Date(b.createdAt) - new Date(a.createdAt);
      });
    default:
      return state;
  }
}

function App() {
  const [challenges, setChallenges] = useLocalStorage("challenges", []);
  const [currentUser, setCurrentUser] = useLocalStorage("currentUser", {
    name: "",
  });

  //useReducer to manage complex sort functionality
  const [filteredChallenges, dispatch] = useReducer(reducer, challenges);

  useEffect(() => {
    dispatch({ type: "NEWEST", payload: challenges })
  }, [challenges])

  return (
    <>
      <Nav challengesApi={[challenges, setChallenges]} userApi={[currentUser, setCurrentUser]} />
      <Sort dispatch={dispatch} />
      {filteredChallenges.map(challenge => <Challenge challenge={challenge} currentUser={currentUser} challenges={challenges} setChallenges={setChallenges} key={challenge.id} />)}
    </>
  );
}



export default App;
