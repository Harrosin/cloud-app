import './App.css';

import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import MainPage from './components/MainPage';
import Walkers from './components/Walkers';
import Owners from './components/Owners';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<MainPage/>}></Route>

          <Route path='/walkers' element={<Walkers/>}></Route>
          <Route path='/owners' element={<Owners/>}></Route>

          <Route path='*' element={<Navigate to="/"/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
