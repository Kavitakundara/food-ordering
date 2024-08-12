import Card from 'react-bootstrap/Card';
import { IMG_CDN } from '../utils/constants';
import '../index.css';
// import { FaStar } from "react-icons/fa";

const Restro = (props) => {

    const { resData } = props;

    const {
        name,
        cloudinaryImageId,
        aggregatedDiscountInfoV3,
        costForTwo,
        cuisines,
        locality,
        avgRating,
    } = resData?.info;

    const { header, subHeader } = aggregatedDiscountInfoV3 || {};

    return (
        <div className="text-left">
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={IMG_CDN + cloudinaryImageId} className='aspect-[4/3]'/>
                <Card.Body>
                    <Card.Title className="animate-bounce">{header} {subHeader}</Card.Title>
                    <Card.Text>
                        <h2 className="text-xl font-serif font-bold">{name}</h2>
                        <p>💵: {costForTwo}</p>
                        <p>🌟: {avgRating} Stars</p>
                        <p>🍝: {cuisines.join()}</p>
                        <p>📌: {locality}</p>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
};

export const promotedLabel = (Restro) => {
    return (props) => {
        return (
            <div>
                <label>Promoted</label>
                <Restro {...props} />
            </div>
        );
    };
};

export default Restro;