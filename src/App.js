import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Friend from './components/Friend/Friend';
import NotFound from './components/NotFound/NotFound';
import Contact from './components/Contact/Contact';
import About from './components/About/About';
import Home from './components/Home/Home';
import Main from './layout/Main';
function App() {
  const router = createBrowserRouter([
    {path : '/', 
    element : <Main></Main>,
    children: [
      {path : '/home', element : <Home></Home>},
      {path : '/friends', element : <Friend></Friend>}, 
      {path : '/contact', element : <Contact></Contact>}, 
      {path : '/*', element : <NotFound></NotFound>}
    ]}, 
    {path : '/about', element : <About></About>}, 
   
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
