import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import './styles/App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Main />} />
      </Routes>
    </Router>
  );
}

export default App;
