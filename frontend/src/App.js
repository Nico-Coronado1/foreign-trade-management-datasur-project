import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import ProductSummary from "./components/ProductsSummary";
import ListToExportProducts from "./components/ListToExportProducts";
import ToExportProductsFilters from "./components/ToExportProductsFilters";
import ExportedProductsFilters from "./components/ExportedProductsFilters";
import ListExportedProducts from "./components/ListExportedProducts";
import { AppProvider } from './context/AppContext';

// TODO: ExportProductForm, crear formulario y ver que funcione el modal -> ok
// TODO: ExportedProductsFilters, crear el selection igual que en ToExportProductsFilter. -> ok
// TODO: ListExportedProducts, crear la lista de los productos ya exportados(mostrar one2many de paises). -> ok
// TODO: Probar si todo funciona hasta ahora(dejar el product form opcional) ir al backend y crear el endpoint con los modelos
//  (tratar de tener datos en la base de datos para la prueba).
// opcional(?).
// TODO: ProductForm, crear productos desde el frontend y mandar datos al backend.
// TODO: Boton excel en ProductsSummmary, dejar opcion de mostrar la informacion de productos en un excel(libreria Python).

function App() {
    return (
      <AppProvider>
          <div className={'container'}>
              <ProductSummary/>
              <h2>Productos a exportar</h2>
              <ToExportProductsFilters/>
              <div className={'row'}>
                  <ListToExportProducts/>
              </div>
              <h2>Productos exportados</h2>
              <ExportedProductsFilters/>
              <div className={'row'}>
                  <ListExportedProducts/>
              </div>
          </div>
      </AppProvider>
    )
}

export default App;
