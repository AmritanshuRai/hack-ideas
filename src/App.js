import { Nav, Challenge } from './components';
import useLocalStorage from './hooks/useLocalStorage';

import './App.css';
function App() {
  const [challenges, setChallenges] = useLocalStorage("challenges", []);
  const [currentUser, setCurrentUser] = useLocalStorage("currentUser", {
    name: "",
  });

  return (
    <>
      <Nav challengesApi={[challenges, setChallenges]} userApi={[currentUser, setCurrentUser]} />
      {challenges.map(challenge => <Challenge challenge={challenge} currentUser={currentUser} challenges={challenges} setChallenges={setChallenges} key={challenge.id} />)}
    </>
  );
}

export default App;
