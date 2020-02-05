import React from 'react';

import * as matrix from 'matrix-js-sdk'

import ServerBar from './components/ServersBar'
import LeftPanel from './components/LeftPanel'
import ChatPanel from './components/ChatPanel'
import RightPanel from './components/RightPanel'

window.client = matrix.createClient('https://matrix.org')

function App() {
  return (
    <div className="App">
      <ServerBar/>
      <LeftPanel/>
      <ChatPanel/>
      <RightPanel/>
    </div>
  );
}

export default App
