import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import Restaurantmenu from "../Restaurantmenu";
import MOCK_DATA from "../Mocks/mockRestaurantMenudata.json";
import { Provider } from "react-redux";
import appstore from "../../Utils/appStore";
import "@testing-library/jest-dom";
import Header from "../Header";
import { BrowserRouter } from "react-router-dom";
import Cart from "../Cart";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA),
  });
});

it("Should load restaurant menu component", async () => {
  await act(async () =>
    render(
      <Provider store={appstore}>
        <Restaurantmenu />
      </Provider>
    )
  );

  const menuList = screen.getByText("Mio Amore");
  expect(menuList).toBeInTheDocument();
});

it("Should have exact number of accordians", async () => {
  await act(async () =>
    render(
      <Provider store={appstore}>
        <Restaurantmenu />
      </Provider>
    )
  );
  const panel = screen.getAllByTestId("category");
  expect(panel.length).toBe(8);
});

it("Should have exact number menu list  of an accordian", async () => {
  await act(async () =>
    render(
      <Provider store={appstore}>
        <Restaurantmenu />
      </Provider>
    )
  );
  //   const panelHeader = screen.getAllByTestId("category");
  //   fireEvent.click(panelHeader[1]);
  const panelHeader = screen.getByText("Celebration Cake Eggless (15)");
  fireEvent.click(panelHeader);

  const itemList = screen.getAllByTestId("menuItem");
  expect(itemList.length).toBe(15);

  //   const buttonList = screen.getAllByRole("button" , {name:"ADD"})
  // console.log(buttonList.length);

  // fireEvent.click(buttonList[0])

  // expect(itemList.length).toBe(15);
});

it("Should added the item to cart by clicking the add button", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appstore}>
          <Header />

          <Restaurantmenu />
          <Cart />
        </Provider>
      </BrowserRouter>
    )
  );
  const buttonList = screen.getAllByRole("button", { name: "ADD" });
  console.log(buttonList.length);

  expect(screen.getByText("Cart(0items)")).toBeInTheDocument();

  fireEvent.click(buttonList[0]);
  expect(screen.getByText("Cart(1items)")).toBeInTheDocument();

  //   expect(screen.getAllByTestId('menuItem').length).toBe(16);
});

it("Should have same number of item in the cart items as per cart add", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appstore}>
          <Header />

          <Restaurantmenu />
          <Cart />
        </Provider>
      </BrowserRouter>
    )
  );

  const buttonList = screen.getAllByRole("button", { name: "ADD" });

  fireEvent.click(buttonList[1]);

  expect(screen.getAllByTestId("menuItem").length).toBe(17);
});

it("Should load restaurant menu component", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appstore}>
          <Header />

          <Restaurantmenu />
          <Cart />
        </Provider>
      </BrowserRouter>
    )
  );

  const clearBtn = screen.getByRole("button", { name: "Clear Cart" });
  fireEvent.click(clearBtn);
  expect(screen.getAllByTestId("menuItem").length).toBe(15);
});
