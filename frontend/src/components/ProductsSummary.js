import React, {useContext} from "react";
import {AppContext} from "../context/AppContext";

const ProductSummary = () => {
    const {exportedProducts} = useContext(AppContext)
    const exportToExcel = () => {
        return true
    }
    return (
        <div>
            <div className='row'>
                <div className='col-8' style={{textAlign: 'center'}}>
                    <h3>Productos Exportados: {exportedProducts}</h3>
                </div>
                <div className='col-4' style={{textAlign: 'center'}}>
                    <button onClick={exportToExcel} className={'btn btn-primary'}>
                        Ver Excel
                    </button>
                </div>
            </div>
        </div>
    )
};
export default ProductSummary;