// index.js
import React, { lazy, Suspense } from 'react';
import './App.css';
import './index.css';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, useRouteError } from 'react-router-dom';
import App from './App';
import Body from './Components/Body';
// import About from './Components/About';
import Error from './Components/Error';  // Add Error component here
import Contact from './Components/Contact';  // Add Contact component here
import reportWebVitals from './reportWebVitals';
import RestroMenue from './Components/RestroMenue';
import Cart from './Components/Cart';
import Notification from './Components/Notification';
// import Bodycopy from './Components/Bodycopy';


const About = lazy(() => import('./Components/About'));

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      // {
      //   path: "/copy",
      //   element: <Bodycopy />,
      // },
      {
        path: "/about",
        element: <Suspense fallback={<h1>Loading...</h1>}><About /></Suspense>,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/menu",
        element: <RestroMenue />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/noti",
        element: <Notification type="success" msg={"new notification"} />,
      },
    ],
    errorElement: <Error />
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
reportWebVitals();
