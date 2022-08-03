//import logo from './logo.svg';
//import './App.css';
import {BrowserRouter , Route, Routes} from 'react-router-dom';
import Nav from './components/Nav';
import Home from './components/Home';
import Movie from './components/Movie';
import Detail from './components/Detail';
import "./App.css";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav/>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/movie" element={<Movie/>}/>
        <Route exact path="movie/:id" element={<Detail/>}/>
        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
