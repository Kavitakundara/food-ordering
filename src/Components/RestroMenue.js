import { useState, useEffect } from "react";

const RestroMenue = () => {
  const [resInfo, setresInfo] = useState([]);
  useEffect(() => {
    // fetchMenue();
  }, []);


  const data = null;

  const xhr = new XMLHttpRequest();
  xhr.withCredentials = true;

  xhr.addEventListener('readystatechange', function () {
    if (this.readyState === this.DONE) {
      console.log(this.responseText);
    }
  });

  xhr.open('GET', 'https://api-football-v1.p.rapidapi.com/v2/odds/league/865927/bookmaker/5?page=2');
  xhr.setRequestHeader('x-rapidapi-key', '204c34823emshecf213316067a76p1fd516jsn5dbe24a462be');
  xhr.setRequestHeader('x-rapidapi-host', 'api-football-v1.p.rapidapi.com');

  xhr.send(data);

  // const fetchMenue = async () => {
  //   const data = await fetch('https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId=425&submitAction=ENTER')
  //     .then(response => {
  //       if (!response.ok) {
  //         throw new Error('Network response was not ok');
  //       }
  //       return response.json();
  //     })
  //     .then(data => {
  //       // Process your JSON data here
  //       console.log(data);
  //     })
  //     .catch(error => {
  //       // Handle errors gracefully
  //       console.error('Error fetching data:', error);
  //     });

  //   console.log(data);
  //   setresInfo(data);
  // };

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