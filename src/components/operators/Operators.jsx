import './Operators.css'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { TiArrowLeftThick } from "react-icons/ti";

function Operators({image}) {
  return (
    <Card className='my-cart'>
      <Card.Img variant="top" src={image}/>
      <Card.Body>
        <Card.Title>روشن</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Card.Footer>
        <Link className='nav-link'><span className='morebtn'>بیشتر بدانید<TiArrowLeftThick className='mx-2' /></span></Link>

        </Card.Footer>
      </Card.Body>
    </Card>
  );
}

export default Operators;
