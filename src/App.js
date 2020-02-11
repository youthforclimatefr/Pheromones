import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import ServerBar from './components/ServersBar'
import LeftPanel from './components/LeftPanel'
import ChatPanel from './components/ChatPanel'
import RightPanel from './components/RightPanel'
import Auth from './components/Auth'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/app">
            <ServerBar/>
            <LeftPanel/>
            <ChatPanel/>
            <RightPanel/>
          </Route>
          <Route path="/">
            <Auth/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App
