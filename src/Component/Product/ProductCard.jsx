import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
const ProductCard = (props) => {

    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={props.thumbnail} />
            <Card.Body style={{ justifyContent: 'space-between', display: 'flex', flexDirection: 'column' }}>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text style={{ flex: 1 }}>
                    {props.description}
                </Card.Text>
                <Button variant="primary">Buy @ <s>${props.price}</s> ${(props.price - (props.discountPercentage * props.price / 100)).toFixed(2)}</Button>
            </Card.Body>
        </Card>
    )
}

export default ProductCard