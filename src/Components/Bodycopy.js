import React, { useEffect, useState } from 'react';

const RestaurantCards = () => {
    const [restaurants, setRestaurants] = useState([]);

    const fetchData = async () => {
        try {
            const response = await fetch(
                "https://www.swiggy.com/dapi/restaurants/list/v5?lat=31.00480&lng=75.94630&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
            );
            const json = await response.json();
            console.log('API Response:', json); // Log the entire response

            // Extract restaurant data from the response
            const restaurantCollection = json?.data?.cards.find(card =>
                card.card?.['@type'] === 'type.googleapis.com/swiggy.presentation.food.v2.RestaurantCollectionV2'
            );

            if (restaurantCollection) {
                const restaurantsData = restaurantCollection.card?.card?.restaurants || [];

                const formattedRestaurants = restaurantsData.map(restaurant => ({
                    name: restaurant.info.name,
                    id: restaurant.info.id
                }));

                setRestaurants(formattedRestaurants);
            } else {
                console.log('No restaurant collection found in data');
            }
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="restaurant-cards">
            {restaurants.length > 0 ? (
                restaurants.map(restaurant => (
                    <div key={restaurant.id} className="card">
                        <h2>{restaurant.name}</h2>
                        <p>ID: {restaurant.id}</p>
                    </div>
                ))
            ) : (
                <p>No restaurants available</p>
            )}
        </div>
    );
};

export default RestaurantCards;
