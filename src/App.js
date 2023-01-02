import logo from './logo.svg';
import './App.css';
import { Button, Card, CardGroup } from 'react-bootstrap';
import Spinner from 'react-bootstrap/Spinner';
function App() {
  return (
    <div className="App">
      <h1>React with Bootstrap</h1>
      <Button variant="danger">My button</Button>
      <br/>
      <Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
   
    </div>
  );
}

export default App;
