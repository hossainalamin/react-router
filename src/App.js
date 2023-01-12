import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Friends from './components/Friends/Friends';
import NotFound from './components/NotFound/NotFound';
import Contact from './components/Contact/Contact';
import About from './components/About/About';
import Home from './components/Home/Home';
import Main from './layout/Main';
import FriendDetail from './components/FriendDetail/FriendDetail';
import Posts from './components/Posts/Posts';
import SinglePost from './components/SinglePost/SinglePost';
function App() {
  const router = createBrowserRouter([
    {path : '/', 
    element : <Main></Main>,
    children: [
      {path : '/home', element : <Home></Home>},
      {path : '/contact', element : <Contact></Contact>}, 
      {path : '/friends',
      loader : async() =>{
        return fetch('https://jsonplaceholder.typicode.com/users')
      }, 
      element : <Friends></Friends>}, 
      { path : '/friend/:friendId',
        loader : async({params})=>{
          console.log(params);
          return fetch(`https://jsonplaceholder.typicode.com/users/${params.friendId}`)
        },
        element : <FriendDetail></FriendDetail>
      },
      {  
        path : '/posts',
        loader : async()=>{
          return fetch('https://jsonplaceholder.typicode.com/posts')
        },
        element : <Posts></Posts>
      },
      {
        path : 'posts/:postId',
        loader : async({params}) =>
        {
          return fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
        },
        element : <SinglePost></SinglePost>
      },
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
