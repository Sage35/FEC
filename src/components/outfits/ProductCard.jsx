import React from 'react';
import Stars from '../shared/Stars.jsx';
import ComparisonModal from './ComparisonModal.jsx';

const ProductCard = ({product, index, currentProduct, fetchProduct, removeOutfit, outfits}) => {
  const handleClick = (id) => {
    fetchProduct(id);
  }

  const handleRemove = (e) => {
    removeOutfit(e.target.name);
  }

  return (
    <div className="product-card" key={index} role="cell">
      <div className="product-image-container" role="img">
        <img className="product-image" src={product.stylePhoto} alt={product.name} width="auto" height="220" onClick={() => handleClick(product.id)}></img>
        {!outfits &&
          <span role="button" aria-label="Compare Product">
            <i className="far fa-star"></i>
            <ComparisonModal product={product} currentProduct={currentProduct}/>
          </span>
        }
        {outfits &&
          <button className="outfits-x" name={product.id} onClick={handleRemove}>X</button>
        }
      </div>
      <span className="product-category" onClick={() => handleClick(product.id)}>{product.category}</span>
      <h4 className="product-name" onClick={() => handleClick(product.id)}>{product.name}</h4>
      <span className="product-price" onClick={() => handleClick(product.id)}>${product.default_price}</span>
      {product.total &&
        <Stars className="product-rating" total={product.total} onClick={() => handleClick(product.id)}/>
      }
      {!product.total &&
        <span onClick={() => handleClick(product.id)}>&nbsp;</span>
      }
    </div>
  )
}

export default ProductCard;
