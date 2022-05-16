import {BsFilterRight} from 'react-icons/bs'

import './index.css'

const ProductsHeader = props => {
  const {sortbyOptions, activeOptionId, updateActiveOptionId} = props
  const onChangeSortby = event => {
    updateActiveOptionId(event.target.value)
  }

  return (
    <div className="products-header">
      <h1 className="products-list-heading">All Products</h1>
      <div className="sort-by-container">
     
      <BsFilterRight className="sort-by-icon" />
        <h1 className="sort-by">Category</h1>
        <select
          className="sort-by-select"
          value={activeOptionId}
          onChange={onChangeSortby}
        >
          {sortbyOptions.map(eachOption => (
            <option
              key={eachOption.categoryId}
              value={eachOption.categoryId}
              className="select-option"
            >
              {eachOption.name}
           
            </option>
          ))}
          
        </select>
        
      </div>
      
    </div>
  )
}

export default ProductsHeader
