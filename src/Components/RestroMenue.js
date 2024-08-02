import { useState, useEffect } from "react";

const RestroMenue = () => {
  const [resInfo, setresInfo] = useState([]);
  useEffect(() => {
    fetchMenue();
  }, []);


  const fetchMenue = async () => {
    const data = await fetch('https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId=425&submitAction=ENTER')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        // Process your JSON data here
        console.log(data);
      })
      .catch(error => {
        // Handle errors gracefully
        console.error('Error fetching data:', error);
      });

    console.log(data);
    setresInfo(data);
  };

  return (
    <div className="Menu">
      <h1>{resInfo?.cards?.card?.card?.info?.city}</h1>
      <ul>
        <li>Biryani</li>
        <li>Burger</li>
        <li>Diet Components</li>
      </ul>
    </div>
  );
};

export default RestroMenue;