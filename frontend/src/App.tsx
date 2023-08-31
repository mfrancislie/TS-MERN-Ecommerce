import { sampleProducts } from "./data"


function App() {

  return (
    <div>
      <nav>
        TS-MERN-Ecommerce
      </nav>
      <main>
        <ul>
          {sampleProducts.map((product) => {
            const {slug, image,name, price} = product
           return (
              <li key={slug}>
              <img
                src={image}
                alt={product.name}
                className="product-image"
              />
              <h2>{name}</h2>
              <p>${price}</p>
            </li>
           )
          })}
        </ul>
      </main>
      <footer>footer</footer>
    </div>
  )
}

export default App
