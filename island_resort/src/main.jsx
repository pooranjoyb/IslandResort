import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Contact from './components/Contact.jsx';
import Booking from './components/Booking.jsx';
import RemoveBooking from './components/RemoveBooking.jsx';
import UpdateBooking from './components/UpdateBooking.jsx';
import ReadBooking from './components/ReadBooking.jsx';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const MyApp = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/contact",
    element: <Contact/>
  },
  {
    path: "/booking",
    element: <Booking/>
  },
  {
    path: "/booking/cancel",
    element: <RemoveBooking/>
  },
  {
    path: "/booking/update",
    element: <UpdateBooking/>
  },
  {
    path: "/booking/review",
    element: <ReadBooking/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={MyApp} />
  </React.StrictMode>,
)
