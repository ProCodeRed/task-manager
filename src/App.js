import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import About from "./components/About";
import Home from "./components/Home";
import TaskDetails from './components/TaskDetails';

function App() {

  // used react router version 6
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/task/:id" element={<TaskDetails />} />
      </Routes>
    </Router>
   
    
  );
}

export default App;
