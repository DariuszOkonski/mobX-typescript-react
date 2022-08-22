import React from 'react';
import './App.css';
import Form from './Form';
import StoreProvider from './stores/StoreProvider';

function App() {
  return (
    <StoreProvider>
      <div className="App">
        <header className="App-header">
          <h1>MobX</h1>

          <Form />
        </header>
      </div>
    </StoreProvider>
  );
}

export default App;
