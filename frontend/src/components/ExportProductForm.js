import React, {useContext, useState} from "react";
import {AppContext} from "../context/AppContext";

import {Button, Modal} from "react-bootstrap";
const ExportProductForm = ({show, setShow, product}) =>{
    const {dispatch, countries} = useContext(AppContext)
    const [quantity, setQuantity] = useState(0)
    const [country, setCountry] = useState('')
    const hideModal = () => setShow(false)
    const exportProduct = (productId) => {
        const remainingQuantity = product.quantityToExport - quantity
        if (remainingQuantity <= 0){
            alert(`El producto ${product.name} no tiene suficientes unidades(cantidad: ${product.quantityToExport})`)
        }
        const payloadData = {
            productId: productId,
            quantityToExport: quantity,
            country: country
        }
        dispatch({
            type: 'EXPORT_PRODUCT',
            payload: payloadData
        })
    }
    if (!product){
        return
    }
    return (
        <>
             <Modal className='modal modal-xl' show={show} onHide={hideModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Exportar producto</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={exportProduct}>
                        <h4>Exportando producto {product.name}</h4>
                        <div className='row'>
                            <div className='col-6'>
                                <label htmlFor={'quantity'}>Cantidad a exportar</label>
                                <input type={'number'} id={'quantity'} className={'form-control'}
                                onChange={event => setQuantity(event.target.value)}/>
                            </div>
                            <div className='col-6'>
                                <label htmlFor={'country'}>Pais a exportar</label>
                                <input type={'text'} id={'country'} className={'form-control'}
                                onChange={event => setCountry(event.target.value)}/>
                            </div>
                        </div>
                        <button className='btn btn-primary' style={{marginTop: '10px'}} onClick={exportProduct(product.id)}
                        type='submit'>
                            Exportar Producto
                        </button>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button className='btn btn-danger' onClick={hideModal}>
                        Cancelar
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default ExportProductForm
