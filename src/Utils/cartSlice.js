import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name : "cart" ,
    initialState : {
        items : []
    } ,

    reducers : {
        addItem: (state , action)=>{

         //Vanilla(older) Redux= > DON"T MUTATE THE STATE , returning kind of mandantory
         //const newState = [...state]
         //newState.items.push(action.payload) 
         //return newState 

        // REDUX uses the immer BTS
        //Redux toolkit - WE HAVE TO MUTATE THE STATE 
        //mutating the state here (direectly changing)
            state.items.push(action.payload)

        } ,

        removeItem : (state )=>{
            state.items.pop()


        } ,

        clearCart : (state)=>{

            //RTK - You have to either mutate the existing state or return the new state.
            // state.items.length=0; // it makes the state as state=[]

            return {items : [] }// this new object will be replaced by the original state =>{items:[]}
        }
    }
})

export const {addItem , removeItem , clearCart} = cartSlice.actions ;

export default cartSlice.reducer ; 