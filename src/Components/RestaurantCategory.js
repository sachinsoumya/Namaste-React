import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ category , menus , changeIndex}) => {

  // const [menus , setMenus] = useState(false);


  const handleClick = () =>{

    changeIndex();
    // console.log("clicked");


    // menus===false ? setMenus(true) : setMenus(false); 

    // setMenus(!menus) ;


  }

  // console.log(category);

  return (
    <div className=" w-6/12 mx-auto border border-grey-600 rounded-sm shadow-lg py-5 px-3 cursor-pointer" data-testid="category">
      {/*  header scetion */}
      
      <div className="flex justify-between" onClick={handleClick}>
        <div className="font-semibold" >{category.title} ({category.itemCards.length})</div>
        <div> ➕</div>
      </div>



      {/*  body scetion */}

      {menus && <ItemList data-testid="item" items = {category.itemCards} />}
    </div>
  );
};

export default RestaurantCategory;
