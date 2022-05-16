import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'

import ProductCard from '../ProductCard'
import ProductsHeader from '../ProductsHeader'
import './index.css'

const sortbyOptions = [
  {
    name: 'Clothing',
    categoryId: 'https://e-c-o-m-m-e-r-c-e.herokuapp.com/clothing',
  },
  {
    name: 'Electronics',
    categoryId:'https://e-c-o-m-m-e-r-c-e.herokuapp.com/electronics',
  },
  {
    name: 'Appliances',
    categoryId: 'https://e-c-o-m-m-e-r-c-e.herokuapp.com/appliances',
  },
  {
    name: 'Grocery',
    categoryId:  'https://e-c-o-m-m-e-r-c-e.herokuapp.com/grocery',
  },
  {
    name: 'Toys',
    categoryId: 'https://e-c-o-m-m-e-r-c-e.herokuapp.com/toys',
  },
]

class AllProductsSection extends Component {
  state = {
    productsList: [],
    isLoading: false,
    activeOptionId: sortbyOptions[0].categoryId,
  }

  componentDidMount() {
    this.getProducts()
  }

  getProducts = async () => {
    this.setState({
      isLoading: true,
    })
    const jwtToken = Cookies.get('jwtToken')
    const {activeOptionId} = this.state
    
    const apiUrl = activeOptionId
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    if (response.ok) {
      const fetchedData = await response.json()
      const fD = {fetchedData}
      const updatedData = fD.fetchedData.map(product => ({
        title: product.title,
        brand: product.brand,
        price: product.price,
        id: product.id,
        imageUrl: product.image_url,
        rating: product.rating,
      }))
    

      this.setState({
        productsList: updatedData,
        isLoading: false,
      })
    }
  }

  updateActiveOptionId = activeOptionId => {
    this.setState({activeOptionId}, this.getProducts)
  }

  renderProductsList = () => {
    const {productsList, activeOptionId} = this.state
    return (
      <>
        <ProductsHeader
          activeOptionId={activeOptionId}
          sortbyOptions={sortbyOptions}
          updateActiveOptionId={this.updateActiveOptionId}
        />
        <ul className="products-list">
          {productsList.map(product => (
            <ProductCard productData={product} key={product.id} />
          ))}
        </ul>
      </>
    )
  }

  renderLoader = () => (
    <div className="products-loader-container">
    <Loader type="Oval" color="blue" height="50" width="50" />
    </div>
  )

  render() {
    const {isLoading} = this.state
    return isLoading ? this.renderLoader() : this.renderProductsList()
  }
}

export default AllProductsSection