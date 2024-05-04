import React, { useEffect, useState } from 'react';
import './Goods.css'
import { Link } from 'react-router-dom';
function ProductDetails() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://fohowomsk.space/api/product_filters/?categories=Косметология");
        const result = await response.json();

        if (result.products) {
          setData(result.products);
        } else {
          console.error('No products found in the response.');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='gc'>
      {data.map((product, index) => (
        <div className="carde" key={product.id}>
          <div className="card">
            <div className="card__top">
              {product.images.map((image) => (
                <Link to={`/product/${product.id}`} className="card__image" key={image.id}>
                  <img src={`http://fohowomsk.space${image.img}`} alt={image.name} />
                </Link>
              ))}
            </div>
            <div className="card__bottom">
              <Link to={`/product/${product.id}`} className="card__title">
                {product.name}
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
export default ProductDetails;