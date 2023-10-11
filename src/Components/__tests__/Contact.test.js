import { render , screen} from "@testing-library/react"
import Contact  from "../Contact" 
import "@testing-library/jest-dom"

//Grouping the test cases
describe("Test cases for contact" , ()=>{

    // beforeAll(()=>{
    //     console.log("Before all")
    // })

    // beforeEach(()=>{
    //     console.log("Before Each")
    // })

    // afterAll(()=>{
    //     console.log("After all");
    // })

    // afterEach(()=>{
    //     console.log("After each");
    // })

    it("Should load contact.js" , ()=>{

        render(<Contact />);
    
        const heading = screen.getByRole("heading");
    
        expect(heading).toBeInTheDocument();
    
    }) ;
    
    it("Should load button" , ()=>{
    
        render(<Contact />);
    
        const button = screen.getByText("Submit");
    
        expect(button).toBeInTheDocument();
    
    });
    
    it("Should load input box" , ()=>{
    
        render(<Contact />);
    
        const inputBox = screen.getByPlaceholderText('Enter your name');
    
        expect(inputBox).toBeInTheDocument();
    
    });
    
    it("Should load input boxes" , ()=>{
    
        render(<Contact />);
    //querying 
        const inputBoxes = screen.getAllByRole('textbox');
    
        console.log(inputBoxes.length);
    //Assertion
        expect(inputBoxes.length).not.toBe(3);
    
    });

})

