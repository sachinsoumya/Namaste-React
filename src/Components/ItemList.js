import { CDN_URL } from "../Utils/constant";
import { addItem } from "../Utils/cartSlice";
import { useDispatch } from "react-redux";
const ItemList = ({ items }) => {

  const dispatch = useDispatch();

  const handleAddItem = (item) =>{

    //Dispatch action
    dispatch(addItem(item))

  }

  // console.log(items);

  return (
    <div className="py-5 text-left" >
      {items.map((item) => {
        return (
          <div
            key={item.card.info.id}
            className="py-3 font-medium flex justify-between border-b-2 border-grey-200"
            data-testid="menuItem"
          >
            {/*Name*/}
            <div>
              <div>{item.card.info.name}</div>
              <div> ₹ - {item.card.info.price / 100}</div>
              <div>{item.card.info.description}</div>
            </div>

            <div className=" w-28 rounded-sm relative">
              <img
                src={CDN_URL + "/" + item.card.info.imageId}
                alt=" "
               
              />
              <button className="rounded-sm absolute -bottom-3 left-7 border border-gray-600 shadow-lg bg-gray-50 text-black p-1" onClick={()=>handleAddItem(item)}> ADD </button>
            </div>

            {/*price*/}
            {/*Des*/}
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
