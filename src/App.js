import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Error from "./Components/Error";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Restaurantmenu from "./Components/Restaurantmenu";
import UserContext from "./Utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./Utils/appStore";
import Cart from "./Components/Cart"

// import Grocessary from "./Components/Grocessary";

//* chunking
//* code spliting
//* Lazy loading
//* Dynamic bundling
// * on demand loading

// * dynamic import

const Grocessary = lazy(() => import("./Components/Grocessary"));

const App = () => {
  const [userInfo, setUserInfo] = useState();

  useEffect(() => {
    const data = {
      name: "Sachin",
    };
    setUserInfo(data.name);
  }, []);

  return (
    <Provider store={appStore}>
      <div className="app">
        {/*Default value */}
        <UserContext.Provider value={{ loggedinUser: userInfo, setUserInfo }}>
          {/* Sachin */}
          {/* <UserContext.Provider value={{ loggedinUser: "Virat Kholi" }} > */}
          {/*Virat Kohli*/}
          <Header />
          {/* </UserContext.Provider> */}

          <Outlet />
        </UserContext.Provider>

        {/**if my path is /about then I have about component**/}
      </div>
    </Provider>
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
        path: "/grocessary",
        element: (
          <Suspense
            fallback={
              <div style={{ textAlign: "center" }}>
                <h1>Loading..</h1>
              </div>
            }
          >
            <Grocessary />
          </Suspense>
        ),
      },

      {
        path: "/restaurants/:resId",
        element: <Restaurantmenu />,
      },

      {
        path :"/cart" ,
        element: <Cart />
      }
    ],
    errorElement: <Error />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
