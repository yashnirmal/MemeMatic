import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Fav from './components/Fav';
import { Route, Routes, Link } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path='/fav' element={<Fav/>} />
        <Route path='/' exact element={<Home/>} />
      </Routes>
      
    </div>
  );
}

export default App;
