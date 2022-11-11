import React from 'react';
import './App.css';
import JobBoardItem from './Components/JobBoardItem';

function App() {
  return (
    <div className="App container bg-gray-400 px-64 pt-7 h-full">
      <JobBoardItem />
      <JobBoardItem />
      <JobBoardItem />
      <JobBoardItem />
      <JobBoardItem />
      <JobBoardItem />
      <JobBoardItem />
    </div>
  );
}

export default App;
