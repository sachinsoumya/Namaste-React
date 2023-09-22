import { useParams } from "react-router-dom";
import useRestaurant from "../Utils/useRestaurant";


const Restaurantmenu = () => {
  const { resId } = useParams();
  console.log(resId);

  //* custom hook
  const resInfo = useRestaurant(resId);

 

 

  if (resInfo === null) return <div>Loading...</div>;

  const { title, itemCards } =
    resInfo?.data.cards[3].groupedCard.cardGroupMap.REGULAR.cards[1].card.card;

  return (
    <div className="menu">
      <h1>{resInfo?.data.cards[0]?.card.card?.info.name}</h1>
      <h5>{resInfo?.data.cards[0]?.card.card?.info.cuisines[0]}</h5>
      <h5>
        {resInfo?.data.cards[0]?.card.card.info.city} ,{" "}
        {resInfo?.data.cards[0]?.card.card.info.feeDetails.message}
      </h5>
      <h3>{resInfo?.data.cards[0]?.card.card.info.sla?.slaString}</h3>
      <h3>{resInfo?.data.cards[0]?.card.card.info.costForTwoMessage}</h3>
      <div
        style={{
          display: "flex",
          color: "gray",
          justifyContent: "space-around",
        }}
      >
        <h2>
          {
            resInfo?.data.cards[0]?.card.card.info.aggregatedDiscountInfo
              .descriptionList[0].meta
          }
        </h2>
        <h2>
          {
            resInfo?.data.cards[0]?.card.card.info.aggregatedDiscountInfo
              .descriptionList[1].meta
          }
        </h2>
      </div>
      <h2>Menus </h2>
      <h4>Recommanded</h4>

      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} - RS.{item.card.info.price / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Restaurantmenu;
