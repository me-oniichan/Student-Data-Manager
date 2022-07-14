import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Home';

function App() {
  return (
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}>
            <Route path='add'></Route>
          </Route>
        </Routes>
      </Router>
  );
}

export default App;
