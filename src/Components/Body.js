import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Restro from './Restro';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import resObj from '../utils/mockData';
import { IoSearch } from "react-icons/io5";
import Form from 'react-bootstrap/Form';

const Body = () => {
    const [restroList, setRestroList] = useState(resObj); // Initialize with mock data
    const [searchText, setSearchText] = useState('');
    const [filteredRestroList, setFilteredRestroList] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const data = await fetch(
                "https://www.swiggy.com/dapi/restaurants/list/v5?lat=31.00480&lng=75.94630&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
            );

            const json = await data.json();
            console.log(json);

            const restaurantCards = json?.data?.cards?.find(card =>
                card.card.card['@type'] === 'type.googleapis.com/swiggy.presentation.food.v2.RestaurantCollectionV2'
            )?.card?.card?.restaurants;

            if (restaurantCards) {
                const restaurants = restaurantCards.map(card => ({
                    info: card.info
                }));
                console.log('value of res', restaurants);
                setRestroList(restaurants);
            }
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    const handleSearch = () => {
        const filterRestro = restroList.filter((res) => 
            res.info.name.toLowerCase().includes(searchText.toLowerCase())
        );
        setFilteredRestroList(filterRestro);
    };

    const handleChange = (e) => {
        setSearchText(e.target.value); // Update searchText state as the user types
    };

    const filterTopRatingRestro = () => {
        const filteredRestros = restroList.filter((res) => res.info.avgRating > 4);
        setFilteredRestroList(filteredRestros);
    };

    return (
        <div className="body">
            <Button variant="info" onClick={filterTopRatingRestro}>
                Top Rating Restro
            </Button>
            <Form>
                <Form.Group className="mb-3 mng-form" controlId="exampleForm.ControlInput1">
                    <Form.Control
                        type="search"
                        placeholder="Search Items..."
                        value={searchText}
                        onChange={handleChange}
                    />
                    <IoSearch />
                    <button type="button" onClick={handleSearch}>Search</button>
                </Form.Group>
            </Form>
            <Container>
                <Row>
                    {filteredRestroList.length > 0 ? (
                        filteredRestroList.map((restaurant) => (
                            <Col key={restaurant.info.id} xs={12} md={6} lg={3}>
                                <Restro resData={restaurant} />
                            </Col>
                        ))
                    ) : (
                        restroList.map((restaurant) => (
                            <Col key={restaurant.info.id} xs={12} md={6} lg={3}>
                                <Restro resData={restaurant} />
                            </Col>
                        ))
                    )}
                </Row>
            </Container>
        </div>
    );
};

export default Body;
