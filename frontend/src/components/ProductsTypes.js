import React, {useContext} from "react";
import {AppContext} from "../context/AppContext";

const ProductsTypes = () => {
    const {types} = useContext(AppContext)
    return (
        <>
            <option value=''>Seleccione un tipo</option>
            {types.map((type, i) => (
                <option key={i} value={type}>{type}</option>
            ))}
        </>
    )
}
export default ProductsTypes