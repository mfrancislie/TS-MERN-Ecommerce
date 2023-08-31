import { sampleProducts } from "./data"
import { Col, Container, Nav, Navbar, Row } from 'react-bootstrap'

function App() {

  return (
    <div>
       <header>
        <Navbar bg="dark" variant="dark" expand="lg">
          <Container>
            <Navbar.Brand>tsamazona</Navbar.Brand>
          </Container>
          <Nav>
            <a href="/cart" className="nav-link">
              Cart
            </a>
            <a href="/signin" className="nav-link">
              Sign In
            </a>
          </Nav>
        </Navbar>
      </header>
      <main>
        <Container className='mt-3'>
          <Row>
          {sampleProducts.map((product) => {
            const {slug, image,name, price} = product
           return (
              <Col key={slug}>
              <img
                src={image}
                alt={product.name}
                className="product-image"
              />
              <h2>{name}</h2>
              <p>${price}</p>
            </Col>
           )
          })}
          </Row>
        </Container>
      </main>
      <footer>footer</footer>
    </div>
  )
}

export default App
