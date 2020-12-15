import React from 'react';


function ProductComponent(props){
    return(
        <div>
            <h2>Name: {props.Products.name}</h2>
            <h2>Prices : {props.Products.prices}</h2>
            <h2>Description: {props.Products.description}</h2>
        </div>
    )
}
export default ProductComponent;