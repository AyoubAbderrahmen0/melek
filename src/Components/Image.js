import React from 'react'
import { Card } from 'react-bootstrap'

const Image = (props) => {
  return (
    <div>
        <Card.Img variant="top" src={props.image} />
    </div>
  )
}

export default Image
