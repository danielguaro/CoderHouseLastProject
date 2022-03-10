// Importación de los reducers en este root.
/* Para combinar los dos reducers, previamente creados e importados aquí*/

import { applyMiddleware, combineReducers, createStore } from 'redux';

import { descriptionReducer } from './reducers/description.reducers';
import { reservationReducer } from './reducers/reservation';
import thunk from 'redux-thunk';
import { userReducer } from './reducers/user.reducer';

/* Para combinar los dos reducers, previamente creados e importados aquí*/
const RootReducer = combineReducers({
	description: descriptionReducer,
	reservations: reservationReducer,
	user: userReducer,
});

/* La exportación aquí es diferente, ya que funciona como un high order component, esto lo que hace es envolver tdos los redusers, para que nuestra app los pueda consumir, por eso no se podría exportar directamente como un export const RootReducer...*/
export default createStore(RootReducer, applyMiddleware(thunk));
/*El createStore envuelve todos los reductores */
