import {
	CREATE_RESERVATION,
	DELETE_RESERVATION,
	FILTER_RESERVATION,
} from '../actions/reservation.action';

import { RESERVATIONS } from '../../data/reservation';

const initialState = {
	listReservations: [],
	selected: null,
};

export const reservationReducer = (state = initialState, action) => {
	switch (action.type) {
		case CREATE_RESERVATION:
			return {
				...state,
				listReservations: [...state.listReservations, action.newReservation],
			};
		case FILTER_RESERVATION:
			return {
				...state,
				filterReserv: state.confirmation.filter(
					(confirm) => confirm.category === action.categoryId
				),
			};
		case DELETE_RESERVATION:
			const filteredReserv = state.listReservations.filter(
				(item) => item.key !== action.itemId
			);
			return {
				...state,
				listReservations: filteredReserv,
			};

		default:
			return state;
	}
};
