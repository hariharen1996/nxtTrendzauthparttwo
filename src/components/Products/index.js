// Write your JS code here
import Header from '../Header/index'
import './index.css'

const Products = () => (
  <>
    <Header />
    <div className="product-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-img.png"
        className="product-img"
        alt="products"
      />
    </div>
  </>
)

export default Products
