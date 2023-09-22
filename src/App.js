import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Error from "./Components/Error";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Restaurantmenu from "./Components/Restaurantmenu";

const App = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
      {/**if my path is /about then I have about component**/}
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/",
        element: <Body />,
      },

      {
        path:"/restaurants/:resId" ,
        element:<Restaurantmenu />
      }
    ],
    errorElement: <Error />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
