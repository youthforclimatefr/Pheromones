import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import * as matrix from 'matrix-js-sdk'

import ServerBar from './components/ServersBar'
import LeftPanel from './components/LeftPanel'
import ChatPanel from './components/ChatPanel'
import RightPanel from './components/RightPanel'
import Auth from './components/Auth'

window.client = matrix.createClient('https://matrix.org')

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
