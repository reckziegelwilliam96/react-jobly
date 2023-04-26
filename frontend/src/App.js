import React, { useState } from "react";
import Routes from "./Routes";
import JoblyApi from "./api";
import { AuthContext, UserContext } from "./UserContext";

function App() {
  const [token, setToken] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);

  async function login(user) {
    const result = await JoblyApi.logInUser(user);
    setToken(result.token);
    setCurrentUser(result.user);
    return result.user;
  }

  async function signup(user) {
    const result = await JoblyApi.registerUser(user);
    setToken(result.token);
    setCurrentUser(result.user);
    return result.user;
  }

  function logout() {
    setToken(null);
    setCurrentUser(null);
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