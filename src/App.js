import React, { useState, useEffect } from 'react';
import TextSelectionDashboard from './components.js/textSelection';
import './App.css';
import { UserContext } from './utils/userContext';

function App() {

  return (
    <div className="App">
      <UserContext.Provider value={[]}>
        <TextSelectionDashboard />
      </UserContext.Provider>
    </div>
  );
}

export default App;
