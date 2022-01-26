import Navbar from './components/Navbar';
import LoginScreen from './screens/LoginScreen';
import { useAuth0 } from "@auth0/auth0-react";


function App() {
  const { isAuthenticated } = useAuth0()
  return (
    <div>
      <Navbar />
      {!isAuthenticated && <LoginScreen />}
    </div>
  );
}

export default App;
