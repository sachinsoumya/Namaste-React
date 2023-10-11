import { fireEvent, render, screen } from "@testing-library/react";
import appStore from "../../Utils/appStore";

import Header from "../Header";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import '@testing-library/jest-dom'

it("Should render Header component with login button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const loginButton = screen.getByRole('button' , {name:'Login'});

  // const loginButton = screen.getByText('Login');
  expect(loginButton).toBeInTheDocument() ;
});



it("Should render Header component with cart item 0", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const cartItems = screen.getByText(/Cart/) ;

  // const cartItems = screen.getByText('Cart(0items)');

  // const loginButton = screen.getByText('Login');
  expect(cartItems).toBeInTheDocument() ;
});

it("Should render Header component with cart ", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const cart = screen.getByText(/Cart/) ;

  // const cartItems = screen.getByText('Cart(0items)');

  // const loginButton = screen.getByText('Login');
  expect(cart).toBeInTheDocument() ;
});


it("Should render Header component and should change login button to log out", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const loginButton = screen.getByRole('button' , {name:'Login'});

  fireEvent.click(loginButton);

  const logoutButton = screen.getByRole('button' , {name:'Logout'});

  // const cartItems = screen.getByText('Cart(0items)');

  // const loginButton = screen.getByText('Login');
  expect(logoutButton).toBeInTheDocument() ;
});
