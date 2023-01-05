import logo from './logo.svg';
import './App.css';
import { AccordionButton, Button, Card, CardGroup } from 'react-bootstrap';
import Spinner from 'react-bootstrap/Spinner';
import { Route, Routes } from 'react-router';
import About from './components/About/About.js';
import Contact from './components/Contact/Contact.js';
import Friend from './components/Friend/Friend.js';
import NotFound from './components/NotFound/NotFound';
function App() {
  return (
    <div className="App">
      <h1>React with Bootstrap</h1>
      <Button variant="danger">My button</Button>
      <br/>
      <Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
    <Routes>
      <Route path='/friend' element={<Friend></Friend>}></Route>
      <Route path='/contact' element={<Contact></Contact>}></Route>
      <Route path='/about' element={<About></About>}></Route>
      <Route path='*' element={<NotFound></NotFound>}></Route>
    </Routes>
    </div>
  );
}

export default App;
