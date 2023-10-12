import { useParams } from "react-router-dom";
import useRestaurant from "../Utils/useRestaurant";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const Restaurantmenu = () => {
  const [showindex , setShowindex] = useState(0);
  const { resId } = useParams();
  console.log(resId);

  //* custom hook
  const resInfo = useRestaurant(resId);

  if (resInfo === null) return <div>Loading...</div>;

  // const { title, itemCards } =
  //   resInfo?.data.cards[3].groupedCard.cardGroupMap.REGULAR.cards[3].card.card;

  const { cards } = resInfo?.data.cards[2]?.groupedCard?.cardGroupMap?.REGULAR;

  const filteredCard = cards.filter((item) => {
    return (
      item.card?.card?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  });

  // console.log(filteredCard);
  // const newCards = cards.slice(1, cards.length - 2);
  // console.log(newCards);
  // console.log(newCards[7].card.card.title);
  // console.log(newCards[7].card.card.itemCards[0].card.info.name)

  return (
    <div className="text-center">
      <h1 className="text-center font-bold">
        {resInfo?.data.cards[0]?.card.card?.info.name}
      </h1>
      <h5 className="font-bold">
        {resInfo?.data.cards[0]?.card.card?.info.cuisines[0]}
      </h5>
      <h5 className="font-bold">
        {resInfo?.data.cards[0]?.card.card.info.city} ,{" "}
        {resInfo?.data.cards[0]?.card.card.info.feeDetails.message}
      </h5>
      <h3 className="font-bold">
        {resInfo?.data.cards[0]?.card.card.info.sla?.slaString}
      </h3>
      <h3 className="font-bold">
        {resInfo?.data.cards[0]?.card.card.info.costForTwoMessage}
      </h3>
      <div className="flex justify-center flex-wrap">
        <div className="font-semibold p-3">
          <div>
            {
              resInfo?.data.cards[0]?.card.card.info.aggregatedDiscountInfo
                .descriptionList[0].meta
            }
          </div>
        </div>
        <div className="font-semibold p-3">
          <div>
            {
              resInfo?.data.cards[0]?.card.card.info.aggregatedDiscountInfo
                .descriptionList[1].meta
            }
          </div>
        </div>
      </div>
      <h2 className="font-bold text-4xl ">Menus </h2>

      <div className="mx-auto bg-gray-50 py-3">
        {/*controlled statement*/}
        {filteredCard.map((item, index) => {
          return (
            <RestaurantCategory
              key = {item?.card?.card.title}
              
              
              category={item?.card?.card}
              menus={index === showindex  ? true : false}
              changeIndex = {()=> setShowindex(index)}
            />
          );
        })}
      </div>

      {/* {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} - RS.{item.card.info.price / 100}
          </li>
        ))} */}
    </div>
  );
};

export default Restaurantmenu;
