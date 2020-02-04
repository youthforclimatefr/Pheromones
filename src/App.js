import React from 'react';
import ServerBar from './components/ServersBar'
import LeftPanel from './components/LeftPanel'
import ChatPanel from './components/ChatPanel'
import RightPanel from './components/RightPanel'

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
