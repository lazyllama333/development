import "../App.css";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FavoriteBorderTwoTone } from "@mui/icons-material";

//https://www.youtube.com/watch?v=S5q4sPe_K_Q&ab_channel=CodeForU
//https://react-bootstrap.github.io/components/cards/

export default function BobaItem({item,handleClick}) {
    const {name, type, image, price, amount, favorited} = item

	return( 

            <Card>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        ${price},{favorited}
                    </Card.Text>
                    <Button variant="primary" onClick = {() => handleClick(item)}>Add To Favorites</Button>
                </Card.Body>
            </Card>

    )

}