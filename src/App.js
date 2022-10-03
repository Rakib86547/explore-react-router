import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Countries from './components/Countries/Countries';
import CountryDetails from './components/CountryDetails/CountryDetails';
import Home from './components/Home/Home';
import Posts from './components/Posts/Posts';
import Users from './components/Users/Users';
import UsersDetails from './components/UsersDetails/UsersDetails';
import Main from './Layout/Main';

function App() {
  const router = createBrowserRouter([
    {path: '/', element: <Main></Main>, children:
   [
    {path: '/home', element: <Home></Home>},
    {path: '/users',
      loader: async() => {
        return fetch('https://jsonplaceholder.typicode.com/users')
      },
    element: <Users></Users>},
    {path: '/posts',
    loader: async () => {
      return fetch('https://jsonplaceholder.typicode.com/posts')
    },
    element: <Posts></Posts>},
    {path: '/countries', 
    loader: async() => {
      return fetch('https://restcountries.com/v3.1/all')
    },
    element: <Countries></Countries>},
    {path: '/user/:userId',
    loader: async ({params}) => {
      return fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`)
    },
    element: <UsersDetails></UsersDetails>},
    {
      path: '/country/:common',
      loader: async({params}) => {
        return fetch(`https://restcountries.com/v3.1/name/${params.common}`)
      },
      element: <CountryDetails></CountryDetails>
    },
   ]

  },
  {path: '*', element: <h1>This is Page is Not Found. 404</h1>}
  ])

  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
