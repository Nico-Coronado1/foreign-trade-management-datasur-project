import React, {createContext, useEffect, useReducer} from 'react';

export const AppReducer = (state, action) => {
    switch (action.type){
        case 'FETCH_PRODUCT_SUCCESS':
            return {...state, products: action.payload}
        case 'FETCH_TYPES_SUCCESS':
            return {...state, types: action.payload}
        case 'FETCH_FAILURE':
            console.log('error')
            return {...state, error: action.payload}
        case 'CREATE_PRODUCT':
            return {...state}
        case "CHANGE_TO_EXPORT_LIST_BY_TYPE":
            if (!action.payload){
                return state
            }
            // solo cambiar a los productos que no tengan valor en el campo exportedQuantity.
            // let updateToExportListByType = state.products.filter((product) =>)
            return {...state}
        case "CHANGE_EXPORTED_LIST_BY_TYPE":
            if (!action.payload){
                return state
            }
            // solo cambiar sacar los que tiene numero en el campo exportedQuantity
            let updatedExportedListByType = state.products.filter((product) => product.type === action.payload)
            return{
                ...state,
                products: updatedExportedListByType
            };
        case "EXPORT_PRODUCT":
            return {...state,}
        default:
            return state
    }
}

const initialState = {
    error: null,
    types:[],
    ExportedProducts: 0,
    products: [{}],
};

export const AppContext = createContext();
export const AppProvider = (props) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);
    useEffect(() => {
        const fetchData = async () => {
        try {
            const response = await fetch('products/api/products');
            const data = await response.json();
            dispatch({ type: 'FETCH_PRODUCT_SUCCESS', payload: data.products });
        } catch (error) {
            dispatch({ type: 'FETCH_FAILURE', payload: error.message });
            }
        };
        fetchData();
    }, []);
   useEffect(() => {
        const fetchData = async () => {
        try {
            const response = await fetch('types/api/types');
            const data = await response.json();
            dispatch({ type: 'FETCH_TYPES_SUCCESS', payload: data.types.types });
        } catch (error) {
            dispatch({ type: 'FETCH_FAILURE', payload: error.message });
            }
        };
        fetchData();
    }, []);
    let exportedProducts = state.products.reduce((total, product) => total + product.exported_quantity, 0);
    return (
        <AppContext.Provider
            value={{
                products: state.products,
                dispatch,
                exportedProducts: exportedProducts,
                types: state.types
            }}
        >
            {props.children}
        </AppContext.Provider>
    );
};