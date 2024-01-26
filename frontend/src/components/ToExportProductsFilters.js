import React, {useContext} from "react";
import {AppContext} from "../context/AppContext";

import ProductsTypes from "./ProductsTypes";


const ToExportProductsFilters = () => {
    const {dispatch} = useContext(AppContext)
    const changeListByType = (type) =>{
        dispatch({
            type: 'CHANGE_TO_EXPORT_LIST_BY_TYPE',
            payload: type
        })
    }
    return (
        <>
            <div className={'row'}>
                <div className='col-4'>
                    <select name="types" id="types"
                            onChange={event => changeListByType(event.target.value)}
                            className='form-select' defaultValue=''>
                        <ProductsTypes/>
                    </select>
                </div>
            </div>
        </>
    )
}

export default ToExportProductsFilters