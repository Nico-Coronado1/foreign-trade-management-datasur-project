import React, {useContext, useState} from "react";
import {AppContext} from "../context/AppContext";

const ListExportedProducts = () => {
    const {products} = useContext(AppContext)

    const exportedProducts = products.filter((product) => product.exported_quantity > 0)
    console.log(products)
    if (!products){
        return (
            <p>No existen productos ya exportados</p>
        )
    }
    return (
        <>
            {exportedProducts.map((product, i) => (
               <div className='col-xl-3' key={i}>
                    <div className="card">
                        <img className="card-img-top" src={product.image} alt={product.name}
                             style={{width: '270px', height: '150px', margin:'auto', marginTop:'10px'}}/>
                        <div className="card-body">
                            <h4 className="card-title">{product.name}</h4>
                            <h5>Cantidad exportada: {product.exported_quantity}</h5>
                            <div className='row'>
                                <div className='col-6'>
                                    <p className={'card-text'}>{product.native_country}</p>
                                </div>
                                <div className='col-6'>
                                    <p className="card-text">{product.type}</p>
                                </div>
                            </div>
                            <div className={'row'}>
                                {product.exported_to.map((country) => (
                                    <div className={'col-4'}>
                                        <p>{country.name}: {country.quantity}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}
export default ListExportedProducts