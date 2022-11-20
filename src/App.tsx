import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import DetailedJob from "./Components/DetailedJob/DetailedJob";
import JobsBoardContainer from "./Components/JobsBoard/JobsBoardContainer";


const App:React.FC = () => {
  return (
    <div className="App bg-background">
      <Routes>
        <Route path={"*"} element={<Navigate to={"/jobs"} replace />}/>
        <Route path={"/jobs"} element={<JobsBoardContainer />} />
        <Route path={"/job/:jobId"} element={<DetailedJob />}/>
      </Routes>
    </div>
  );
}

export default App;
