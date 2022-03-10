import {
	getReservations,
	removeReservation,
	saveReservation,
} from '../../firebase/reservation';
import { useEffect, useState } from 'react';

/* Creación del action para el description */
export const CREATE_RESERVATION = 'SELECT_RESERVATION';
export const FILTER_RESERVATION = 'FILTER_RESERVATION';
export const DELETE_RESERVATION = 'DELETE_RESERVATION';

/* Esta constante servirá como identificador, en el que seleccionamos la acción que se despachará*/

export const createReservation = (
	// hour,
	// day,
	// programInfo,
	// email,
	reservation
) => {
	return async (dispatch) => {
		try {
			const dataBase = await saveReservation(reservation);
			// //Ensayo loco
			// const [reservations, setReservations] = useState();

			// useEffect(() => {
			// 	getReservations().then((listReservations) => {
			// 		const returnArr = [];
			// 		listReservations.forEach(function (childSnapshot) {
			// 			var item = childSnapshot.val();
			// 			item.key = childSnapshot.key;

			// 			returnArr.push(item);
			// 		});

			// 		setReservations(returnArr);
			// 	});
			// }, []);
			// //

			dispatch({
				type: CREATE_RESERVATION,
				newReservation: dataBase,
			});
		} catch (error) {
			console.log(error);
		}
	};
	// type: CREATE_RESERVATION,
	// newReservation: scheduleObject,
};

export const filterReservation = (id) => ({
	type: FILTER_RESERVATION,
	categoryId: id,
});

export const deleteReservation = (item) => {
	return async (dispatch) => {
		try {
			var item = item.key;
			const remove = removeReservation(item);
			dispatch({
				type: DELETE_RESERVATION,
				key: remove,
			});
		} catch (error) {
			console.log(error);
		}
	};

	// type: DELETE_RESERVATION,
	// itemId,
};
