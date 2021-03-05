import React, { useState } from 'react';
import ItemsCarousel from 'react-items-carousel';
import ProductCard from './ProductCard.jsx';

const Carousel = ({relatedProducts, currentProduct, fetchProduct}) => {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 40;
  const children = relatedProducts.map((product, index) => {
    return (
      <ProductCard key={index} product={product} index={index} fetchProduct={fetchProduct} currentProduct={currentProduct} style={{ height: 220, background: '#EEE' }}/>
    );
  })
  return (
    <div style={{ padding: `0 ${chevronWidth}px` }}>
      <ItemsCarousel
        // className="carousel"
        requestToChangeActive={setActiveItemIndex}
        activeItemIndex={activeItemIndex}
        numberOfCards={4}
        gutter={20}
        leftChevron={<button>{'<'}</button>}
        rightChevron={<button>{'>'}</button>}
        outsideChevron
        chevronWidth={chevronWidth}
      >
        {children}
      </ItemsCarousel>
    </div>
  );
}

export default Carousel;
