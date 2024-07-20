import Card from 'react-bootstrap/Card';
import  {IMG_CDN} from '../utils/constants';
// import { FaStar } from "react-icons/fa";

const Restro = (props) => {

    const { resData } = props;

    const {
        cloudinaryImageId,
        aggregatedDiscountInfoV3, 
        name,
        costForTwo,
        cuisines,
        locality,
        avgRating,
    } = resData?.info;

    return (
        <div className="restro">
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={IMG_CDN + cloudinaryImageId} />
                <Card.Body>
                    <Card.Title>{aggregatedDiscountInfoV3.header} {aggregatedDiscountInfoV3.subHeader}</Card.Title>
                    <Card.Text>
                        <h4>{name}</h4>
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

export default Restro;