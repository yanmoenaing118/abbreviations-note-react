import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { App as AppStyle } from "./App.module.scss";
import Home from "./Pages/Home/Home";
import New from "./Pages/New/New";
import Favorites from "./Pages/Favorites/Favorites";
import EditAbbreviation from "./Pages/EditAbbreviation/EditAbbreviation";
import ShowAbbreviation from "./Pages/ShowAbbreviation/ShowAbbreviation";

// const db = [
//   {
//     id: 0,
//     abbr: "DNS",
//     stands_for: "Domain Name System",
//     desc:
//       "Notice the use of %PUBLIC_URL% in the tags above. It will be replaced with the URL of the public folder during the build. Only files inside the public folder can be referenced from the HTML.",
//   },

//   {
//     id: 1,
//     abbr: "IP",
//     stands_for: "Internet Protocol",
//     desc:
//       "IP will be replaced with the URL of the public folder during the build. Only files inside the public folder can be referenced from the HTML",
//   },

//   {
//     id: 2,
//     abbr: "TCP",
//     stands_for: "Transmition Control Protocol",
//     desc:
//       "TCP will be replaced with the URL of the public folder during the build. Only files inside the public folder can be.",
//   },
//   {
//     id: 3,
//     abbr: "DNS",
//     stands_for: "Domain Name System",
//     desc:
//       "Notice the use of %PUBLIC_URL% in the tags above. It will be replaced with the URL of the public folder during the build. Only files inside the public folder can be referenced from the HTML.",
//   },

//   {
//     id: 4,
//     abbr: "IP",
//     stands_for: "Internet Protocol",
//     desc:
//       "IP will be replaced with the URL of the public folder during the build. Only files inside the public folder can be referenced from the HTML",
//   },

//   {
//     id: 5,
//     abbr: "TCP",
//     stands_for: "Transmition Control Protocol",
//     desc:
//       "TCP will be replaced with the URL of the public folder during the build. Only files inside the public folder can be.",
//   },
//   {
//     id: 6,
//     abbr: "DNS",
//     stands_for: "Domain Name System",
//     desc:
//       "Notice the use of %PUBLIC_URL% in the tags above. It will be replaced with the URL of the public folder during the build. Only files inside the public folder can be referenced from the HTML.",
//   },

//   {
//     id: 7,
//     abbr: "IP",
//     stands_for: "Internet Protocol",
//     desc:
//       "IP will be replaced with the URL of the public folder during the build. Only files inside the public folder can be referenced from the HTML",
//   },

//   {
//     id: 8,
//     abbr: "TCP",
//     stands_for: "Transmition Control Protocol",
//     desc:
//       "TCP will be replaced with the URL of the public folder during the build. Only files inside the public folder can be.",
//   },
// ];

function App() {
  return (
    <BrowserRouter>
      <div className={AppStyle}>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/new" exact component={New} />
          <Route path="/favorites" exact component={Favorites} />

          <Route path="/edit-abbr/:id" exact component={EditAbbreviation} />
          <Route path="/abbr/:id" exact component={ShowAbbreviation} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
