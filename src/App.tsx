import React from 'react';
import './App.css';
import StoreProvider from './stores/StoreProvider';
import Forms from './Forms';
import Comments from './Comments';

function App() {
  return (
    <StoreProvider>
      <div className="App">
        <header className="App-header">
          <h1>MobX</h1>
          <Forms />
          <Comments />
        </header>
      </div>
    </StoreProvider>
  );
}

export default App;
