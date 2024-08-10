import { useState, useEffect } from "react";

const RestroMenue = () => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchMenue();
  }, []);

  const fetchMenue = async () => {
    try {
      const response = await fetch('https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId=425&submitAction=ENTER');
      const json = await response.json();

      // Extract the required data from json
      const itemCards = json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards;

      console.log("KAVITA =>", json);
      setResInfo({
        itemCards,
        restaurantInfo: json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card // Adjust as needed
      });
    } catch (error) {
      console.error("Error fetching menu:", error);
    }
  };

  if (!resInfo) {
    return <div>Loading...</div>;
  }

  return (
    <div className="Menu">

      <h1>{resInfo.itemCards.title}</h1>
      {resInfo.itemCards.map((item) => (

        <><div key={item.card.info.id}>
        </div>
          <p>Item Name = {item.card.info.name}</p>
          <p>Description = {item.card.info.description} </p>
          <p>⭐ = {item.card.info.ratings.aggregatedRating.rating}</p>
          <p>💵 ={item.card.info.price / 100}₹</p>
        </>
      ))
      }
    </div>
  );
};

export default RestroMenue;
