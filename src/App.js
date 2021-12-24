import React from 'react';
import Routess from './components/Routess';
import Header from './components/Header';
function App() {
  return (
    <div className="App">
      <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests"></meta>
      <Header></Header>
      <Routess></Routess>
    </div>
  );
}

export default App;
