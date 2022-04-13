// Importa los Componentes
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import reducers from './reducers';

// Crea los Middlewares
let middlewares = [thunk];

// Agrega al middleware createLogger
if (__DEV__ === true) {
  // Agrega Logger a middleware
  middlewares.push(createLogger());
}

// Crea store
let store = createStore(
    //reducer principal
    reducers,
    //estado inicial
    {},
    compose(applyMiddleware(...middlewares))
);

// Exporta store
export default {
    store
};