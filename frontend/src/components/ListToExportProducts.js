import React, {useContext, useState} from "react";
import {AppContext} from "../context/AppContext";

import ExportProductForm from "./ExportProductForm";
const ListToExportProducts = () => {
    const {products} = useContext(AppContext);
    const [show, setShow] = useState(false)
    const [productData, setProduct] = useState(undefined)
    const showModal = (product) => {
        setShow(true)
        setProduct(product)
    }
    const productsToExport = products.filter((product) => product.exported_quantity <= 0 || product.quantity_to_export >= 1)
    if (!products){
        return (
            <>
                <h3>No existen productos listo para exportar</h3>
            </>
        )
    }
    return (
        <>
            {productsToExport.map((product, i) => (
                <div className='col-xl-3' key={i}>
                    <div className="card">
                        <img className="card-img-top" src={product.image} alt={product.name}
                             style={{width: '270px', height: '150px', margin:'auto', marginTop:'10px'}}/>
                        <div className="card-body">
                            <h4 className="card-title">{product.name}</h4>
                            <h5>{product.quantity_to_export}</h5>
                            <div className='row'>
                                <div className='col-6'>
                                    <p className={'card-text'}>{product.native_country}</p>
                                </div>
                                <div className='col-6'>
                                    <p className="card-text">{product.type}</p>
                                </div>
                            </div>
                            <button className={'btn btn-primary'} onClick={() => showModal(product)}
                                    style={{width:'100%', marginTop:'5px'}}>
                                Exportar
                            </button>
                        </div>
                    </div>
                </div>
            ))}
            <ExportProductForm show={show} setShow={setShow} product={productData}/>
        </>
    )
};

export default ListToExportProducts