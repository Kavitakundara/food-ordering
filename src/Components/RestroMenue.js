import { useState, useEffect } from "react";

const RestroMenue = () => {
    const [resInfo, setresInfo] = useState([])

    useEffect(() => {
        fetchMenue();
    }, []);


    const fetchMenue = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId=425&submitAction=ENTER"
        );
        const json = await data.json();
        console.log(json);
    };

    return (
        <div className="Menu">
            <h1>Menu List</h1>
            <ul>
                <li>Biryani</li>
                <li>Burger</li>
                <li>Diet Components</li>
            </ul>
        </div>
    );
};

export default RestroMenue;