import React from "react";
import Routes from "./Routes";
import JoblyApi from "./api";
import useLocalStorage from "./helpers";
import { AuthContext, UserContext } from "./UserContext";

function App() {

    const [token, setToken] = useLocalStorage("token", null);
    const [currentUser, setCurrentUser] = useLocalStorage("currentUser",null);   

    async function login(user) {
      const result = await JoblyApi.logInUser(user);
      setToken(result.token);   
      const userData = await JoblyApi.getUser(user.username);
      setCurrentUser(userData);   
      return result.user;
    }

    async function signup(user, history) {
      const result = await JoblyApi.registerUser(user);
      setToken(result.token);

      const userData = await JoblyApi.getUser(user.username);
      setCurrentUser(userData, () => {
        history.push('/');
      });

      return userData;
    }

    function logout() {
      setToken(null);
      setCurrentUser(null);
      window.localStorage.removeItem("token");
      window.localStorage.removeItem("currentUser");
    }

  return (
    <div className="App">
      <AuthContext.Provider value={{ token, setToken }}>
        <UserContext.Provider value={{ currentUser, setCurrentUser }}>
          <Routes signup={signup} login={login} logout={logout} />
        </UserContext.Provider>
      </AuthContext.Provider>
    </div>
  );
}

export default App;