// index.js
import React from 'react';
import './App.css';
import './index.css';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, useRouteError } from 'react-router-dom';
import App from './App';
import Body from './Components/Body';
import About from './Components/About';
import Error from './Components/Error';  // Add Error component here
import Contact from './Components/Contact';  // Add Contact component here
import reportWebVitals from './reportWebVitals';
import RestroMenue from './Components/RestroMenue';

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/menu/:Id",  
        element: <RestroMenue />,
      },
    ],
    errorElement: <Error/>
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
reportWebVitals();
