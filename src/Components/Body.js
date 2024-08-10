import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Restro, { promotedLabel } from './Restro';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../index.css';
// import resObj from '../utils/mockData';
import { IoSearch } from "react-icons/io5";
import Form from 'react-bootstrap/Form';

const Body = () => {
    const [restroList, setRestroList] = useState([]); // this is a dummy data
    const [searchText, setSearchText] = useState('');
    const [filteredRestroList, setFilteredRestroList] = useState([]);

    // const restroPromoted = promotedLabel(Restro);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {

        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=31.00480&lng=75.94630&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );
        const json = await data.json();
        // const restaurants = data?.data?.cards['']?.card?.card?.gridElements?.infoWithStyle?.restaurants['']?.info;
        console.log(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setRestroList(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

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

    // filter for top rating restaurant
    const filterTopRatingRestro = () => {
        const filteredRestros = restroList.filter((res) => res.info.avgRating > 4);
        setFilteredRestroList(filteredRestros);
    };

    return (
        <div className="body">
            <div className="flex p-3 justify-between">
                <Button variant="info" onClick={filterTopRatingRestro} className="pt-1 h-8 text-white orange!important">
                    Top Rating Restro
                </Button>
                <Form>
                    <Form.Group className="mb-3 mng-form flex items-center" controlId="exampleForm.ControlInput1">
                        <Form.Control
                            type="search"
                            placeholder="Search Items..."
                            value={searchText}
                            onChange={handleChange}
                        />
                        <IoSearch onClick={handleSearch} className="bg-black text-white h-8 text-lg" />

                        {/* <button type="button" onClick={handleSearch}>Search</button> */}
                    </Form.Group>
                </Form>
            </div>
            <Container>
                <Row>
                    {filteredRestroList.length > 0 ? (
                        filteredRestroList.map((restaurant) => (
                            <Col key={restaurant.id} xs={12} md={6} lg={3}>
                                <Restro resData={restaurant} />
                            </Col>
                        ))
                    ) : (
                        ///* this restrolist getting dully data form resOB */
                        restroList.map((restaurant) => (
                            <Col key={restaurant.id} xs={12} md={6} lg={3}>
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
