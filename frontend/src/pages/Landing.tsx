import { Col, Row } from 'react-bootstrap'
import { sampleProducts } from '../data'
import {Link} from 'react-router-dom'

const Landing = () => {
  return (
    <Row>
          {sampleProducts.map((product) => {
            const {slug, image,name, price} = product
           return (
              <Col key={slug}>
            <Link to={'/product/' + product.slug}>
              <img
                src={image}
                alt={product.name}
                className="product-image"
                />
              <h2>{name}</h2>
              <p>${price}</p>
                </Link>
            </Col>
           )
          })}
          </Row>
  )
}

export default Landing