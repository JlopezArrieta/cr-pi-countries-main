//configurar del store en Redux para una aplicación de React. 
//Redux es una biblioteca de administración de estado para aplicaciones de React
//que permite una gestión eficiente y predecible del estado de la aplicación.

import { createStore, applyMiddleware, compose } from "redux";
import thunkMiddleware  from "redux-thunk";
import reducer  from "./reducer";
//createStore: Es una función que se utiliza para crear una tienda de Redux, 
//que es donde se almacena el estado de la aplicación.

//applyMiddleware: Es una función que se utiliza para aplicar middleware a Redux.
//El middleware es una forma de interceptar y manejar acciones antes de que lleguen a los reducers.

//compose: Es una función que permite combinar múltiples funciones en una sola.

//thunkMiddleware: Es un middleware específico para Redux que permite realizar peticiones asíncronas en las acciones.

// Permite utilizar "REACT-REDUX":
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//Aquí, se configura una variable llamada composeEnhancer. Esta variable se establece para 
//habilitar la extensión de Redux DevTools en el navegador, si está disponible. La extensión
//DevTools proporciona herramientas útiles para depurar y rastrear el estado de Redux. Si la 
//extensión no está disponible, se utiliza la función compose predeterminada.

const store = createStore(
    reducer,
     // Permite hacer peticiones asíncronas:
    composeEnhancer(applyMiddleware(thunkMiddleware))
)

//este código configura una tienda de Redux para una aplicación de React. 
//Utiliza middleware thunkMiddleware para permitir peticiones asíncronas y configura la 
//extensión de Redux DevTools si está disponible en el navegador. La tienda resultante se 
//exporta para su uso en otros componentes de la aplicación.

export default store;






