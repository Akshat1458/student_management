import Navbar from './components/navbar.js';
import {BrowserRouter,Route, Routes} from 'react-router-dom';
import Allstud from './components/allstud.js';
import Addstud from './components/addstud.js';
import Home from './components/home.js';
import Search from './components/search.js';
function App() {
  return (
    <BrowserRouter>
      <Navbar/> 
      <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route exact path="/all" element={<Allstud/>}/>
      <Route exact path="/add" element={<Addstud/>}/>
      <Route exact path="/search" element={<Search/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
