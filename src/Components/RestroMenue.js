import '../index.css';
import { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import { addItem } from '../utils/cartSlice'

const RestroMenue = () => {
  const [resInfo, setResInfo] = useState(null);
  const dispatch = useDispatch();

  const handleItem = (item) => {
    dispatch(addItem(item));
  }

  useEffect(() => {
    fetchMenue();
  }, []);

  const fetchMenue = async () => {
    try {
      const response = await fetch('https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId=425&submitAction=ENTER');
      const json = await response.json();

      // Extract the required data from json
      const itemCards = json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards;

      // console.log("KAVITA =>", json);
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
        <>
          <div key={item.card.info.id}>
          </div>
          <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/" + item.card.info.imageId} className="w-img " />
          <button className="p-2 mx-16 rounded-lg bg-black text-white shadow-lg" onClick={() => handleItem(item)}>Add +</button>
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
