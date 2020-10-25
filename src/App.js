import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import { App as AppStyle } from "./App.module.scss";
import Home from "./Pages/Home/Home";
import New from "./Pages/New/New";
import Favorites from "./Pages/Favorites/Favorites";
import EditAbbreviation from "./Pages/EditAbbreviation/EditAbbreviation";
import ShowAbbreviation from "./Pages/ShowAbbreviation/ShowAbbreviation";
import AuthContext from "./context/authContext";
import Search from "./Pages/Search/Search";
import Auth from "./Pages/Auth/Auth";
import { AnimatePresence } from "framer-motion";
import UserProfile from "./Pages/UserProfile/UserProfile";

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
      <div className={AppStyle}>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/new" exact component={New} />
          <Route path="/favorites" exact component={Favorites} />
          <Route path="/search" exact component={Search} />

          <Route path="/edit-abbr/:id" exact component={EditAbbreviation} />
          <Route path="/abbr/:id" exact component={ShowAbbreviation} />
          <Route path="/auth" exact component={Auth} />
          <Route path="/profile/:slug" exact component={UserProfile} />
        </Switch>
      </div>
    </AuthContext.Provider>
  );
}

export default App;
