import React from 'react'
import { Button, Card } from 'react-bootstrap'
import Image from './Image'
import Name from './Name'
import Description from './Description'
import Price from './Price'

const ProductCard = (props) => {
  const styles = {
    card: {
      width: '18rem',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    },
    cardHover: {
      transform: 'translateY(-5px)',
      boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.2)',
    },}
  return (
    <div className='mt-3'>
      <Card 
      style={styles.card}
      onMouseEnter={(e) => e.currentTarget.style.transform = styles.cardHover.transform}
      onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
      onMouseOver={(e) => e.currentTarget.style.boxShadow = styles.cardHover.boxShadow}
      onMouseOut={(e) => e.currentTarget.style.boxShadow = 'none'}>
      <Image image={props.product.imgUrl}/>
      <Card.Body>
        <Card.Title><Name name={props.product.name} /> </Card.Title>
        <Card.Text>
          <Description description={props.product.description} /> - <Price price={props.product.price} />
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </div>
  )
}

export default ProductCard
