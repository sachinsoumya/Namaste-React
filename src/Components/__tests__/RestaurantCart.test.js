import RestCart from "../RestCart"
import {  render, screen } from "@testing-library/react"
import MOCK_DATA from "../Mocks/resCardMock.json"
import '@testing-library/jest-dom'

it('It should render the ResCart component with props' , ()=>{


    render(<RestCart resData= {MOCK_DATA } />)

    const name = screen.getByText("Nana Hotel") ;

    expect(name).toBeInTheDocument();
})