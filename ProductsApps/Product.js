import React from 'react';
import productdata from './SchoolProduct';
import ProductComponent from './components/productComponent';

function ProductApp(){

  const ProductRender = productdata.map(item=>
        <ProductComponent key={item.id} Products={item}/>
    )

    return(
        <div>
            {ProductRender}
        </div>
    )
}
export default ProductApp;