import React from "react";
import { Route, Switch } from "react-router-dom";
import Layout from "./components/layout/Layout";
import AllMeetups from "./pages/AllMeetups";
import Favorites from "./pages/Favorites";
import NewMeetup from "./pages/NewMeetup";
const App = () => {
  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route path="/" exact>
            <AllMeetups />
          </Route>
          <Route path="/new-meetup">
            <NewMeetup />
          </Route>
          <Route path="/favorites">
            <Favorites />
          </Route>
        </Switch>
      </Layout>
    </div>
  );
};

export default App;
