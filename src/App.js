import React, { useState } from "react";
import { Router, Route, Switch } from "react-router-dom";
import { App as AppStyle } from "./App.module.scss";
import Home from "./Pages/Home/Home";
import New from "./Pages/New/New";
import Favorites from "./Pages/Favorites/Favorites";
import EditAbbreviation from "./Pages/EditAbbreviation/EditAbbreviation";
import ShowAbbreviation from "./Pages/ShowAbbreviation/ShowAbbreviation";
import AuthContext from "./context/authContext";
import Signup from "./Pages/Auth/Signup/Signup";
import Login from "./Pages/Auth/Login/Login";
import history from "./history";
import Search from "./Pages/Search/Search";

function App() {
  let [auth, setAuth] = useState(false);

  const loginHandler = () => {
    setAuth(true);
  };

  const logoutHander = () => {
    console.log("h");
    setAuth(false);
  };

  return (
    <AuthContext.Provider
      value={{
        auth: auth,
        login: loginHandler,
        logout: logoutHander,
      }}
    >
      <Router history={history}>
        <div className={AppStyle}>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/new" exact component={New} />
            <Route path="/favorites" exact component={Favorites} />
            <Route path="/search" exact component={Search} />

            <Route path="/edit-abbr/:id" exact component={EditAbbreviation} />
            <Route path="/abbr/:id" exact component={ShowAbbreviation} />
            <Route path="/signup" exact component={Signup} />
            <Route path="/login" exact component={Login} />
          </Switch>
        </div>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
