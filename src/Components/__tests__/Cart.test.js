import { render, screen } from "@testing-library/react"
import { act } from "react-dom/test-utils" 
import Restaurantmenu from '../Restaurantmenu'
import MOCK_DATA  from '../Mocks/mockRestaurantMenudata.json'

global.fetch= jest.fn(()=>{
    return Promise.resolve({
        json : Promise.resolve(MOCK_DATA)
    })

})



it('Should load restaurant menu component' ,async()=>{
    await act(async ()=>
        render(<Restaurantmenu />))

   const menuList = screen.getAllByTestId("item");
   expect(menuList).toBeInTheDocument();     



})