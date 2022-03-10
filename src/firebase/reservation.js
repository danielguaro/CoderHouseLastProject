import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
import { v4 as uuidv4 } from 'uuid';

export const saveReservation = async (reservation) => {
	try {
		return await database().ref(`/reservations/${uuidv4()}`).set(reservation);
	} catch (err) {
		return err;
	}
};
export const getReservations = async () => {
	const userId = auth().currentUser.uid;
	const ref = database().ref('reservations');
	return await ref.orderByChild('userId').equalTo(userId).once('value');
};

export const removeReservation = async (item) => {
	await database().ref(`/reservations/${item}`).remove();
};
