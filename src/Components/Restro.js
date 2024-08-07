import Card from 'react-bootstrap/Card';
import { IMG_CDN } from '../utils/constants';
// import { FaStar } from "react-icons/fa";

const Restro = (props) => {

    const { resData } = props;

    const {
        name,
        cloudinaryImageId,
        aggregatedDiscountInfoV3,
        title,
        costForTwo,
        cuisines,
        locality,
        avgRating,
    } = resData?.info;

    const { header, subHeader } = aggregatedDiscountInfoV3 || {};

    return (
        <div className="restro">
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={IMG_CDN + cloudinaryImageId} />
                <Card.Body>
                    <Card.Title>{header} {subHeader}</Card.Title>
                    <Card.Text>
                        <h2>{name}</h2>
                        <h4>{title}</h4>
                        <p>{costForTwo}</p>
                        <p>{avgRating} Stars</p>
                        <p>{cuisines.join()}</p>
                        <p>{locality}</p>
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