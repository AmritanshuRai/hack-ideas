import { Nav, Challenge } from './components';
import useLocalStorage from './hooks/useLocalStorage';

import './App.css';
function App() {
  const [challenges, setChallenges] = useLocalStorage("challenges", []);
  const syncStorageAndState = () => {
    const savedValue = JSON.parse(localStorage.getItem("challenges"));
    setChallenges(savedValue)
  }
  return (
    <>
      <Nav syncStorageAndState={syncStorageAndState} />
      {challenges.map(challenge => <Challenge challenge={challenge} key={challenge.id} />)}
      <button>update</button>
    </>
  );
}

export default App;
