import { fireEvent, render, screen } from "@testing-library/react";

import Body from "../Body";
import MOCK_DATA from "../Mocks/mockRestaurantListdata.json";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { act } from "react-dom/test-utils";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

// console.log(global.fetch);

it("Should search res list for Restaurant text input", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const cardsBeforeSearch = screen.getAllByTestId("res-card");

  expect(cardsBeforeSearch.length).toBe(13);

  const searchButton = screen.getByRole("button", { name: "search" });

  //   const searchButton = screen.getByText("search");

  const searchInput = screen.getByTestId("searchInput");
  console.log(searchInput);

  fireEvent.change(searchInput, { target: { value: "Restaurant" } });

  fireEvent.click(searchButton);

  const cardsAfterSearch = screen.getAllByTestId("res-card");

  expect(cardsAfterSearch .length).toBe(5);

  //screen should load 4 cards

  expect(searchButton).toBeInTheDocument();
});


it("Should filter top rated restaurant " , async()=>{

  await act(async ()=>{
    render(
      <BrowserRouter>
       <Body />
      </BrowserRouter>
    )
  })

  const beforeClick  = screen.getAllByTestId("res-card");

  expect(beforeClick.length).toBe(13)


  const topRatedBtn = screen.getByRole("button" , {name : "Top rated restaurant"});

  expect(topRatedBtn).toBeInTheDocument();

  fireEvent.click(topRatedBtn);

  const afterClick = screen.getAllByTestId("res-card");


  expect(afterClick.length).toBe(3);


  // console.log(topRatedBtn);




});
