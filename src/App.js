import './App.css';
import MasterLayout from './component/MasterLayout/MasterLayout';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Portfolio from './component/Portfolio/Portfolio';
import About from './component/About/About';
import Contact from './component/Contact/Contact';
import NotFound from './component/NotFound/NotFound';
import Home from './component/Home/Home';

function App() {
  const router = createBrowserRouter([
    {
      path: '', element: <MasterLayout />, children: [
      {path:'',element:<Home/>},
      {path:'home',element:<Home/>},
      {path:'portfolio',element:<Portfolio/>},
      {path:'about',element:<About/>},
      {path:'contact',element:<Contact/>},
      {path:'*',element:<NotFound/>}
    ]}
  ])
  return (
    <>
    <RouterProvider router={router}/>
    </>
  );
}

export default App;
