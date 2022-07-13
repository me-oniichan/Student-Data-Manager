import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './Component/Navbar';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Navbar/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
