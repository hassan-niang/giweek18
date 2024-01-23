import './App.css';
import { BrowserRouter as Router, Routes, Route, Link, BrowserRouter } from 'react-router-dom';
import MovieSearchApp from './medium.js';
import CounterApp from './easy.js';
import Navbar from './componets/navbar.jsx';
import ToDoApp from './hard.js';
// import TaskDetails from './TaskDetails.js';

function App() {
  return (
          <div>
      <Router>
      <Navbar/>
      <Routes>
      <Route path="/" element={<CounterApp/>}/>
      <Route path="/movie/*" element={<MovieSearchApp/>} />
      <Route path="/todolist" element={<ToDoApp/>}/>
      {/* <Route path="/task/:taskId" component={<TaskDetails/>} /> */}
      </Routes>
      </Router>
      </div>
  );
}

export default App;