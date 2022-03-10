import {
	SafeAreaView,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { COLORS } from '../styles/colors';
import React from 'react';
import { ReservationMoment } from '../components/ReservationMoment';
import auth from '@react-native-firebase/auth';
import { createReservation } from '../store/actions/reservation.action';

export const MomentReservation = ({ navigation, route }) => {
	const dispatch = useDispatch();
	const programInformation = useSelector((state) => state);
	console.log(programInformation);

	const handlerSelectedReservation = (hour, day, programInfo) => {
		const reservation = {
			hour,
			day,
			programInfo: programInfo,
			userId: auth().currentUser.uid,
		};
		dispatch(createReservation(reservation));
		navigation.navigate('confirmReservartion');
	};

	return (
		<SafeAreaView style={styles.container}>
			<TouchableOpacity
				style={styles.return}
				onPress={() => navigation.goBack()}
			>
				<Text style={styles.returnText}>Volver</Text>
			</TouchableOpacity>
			<ReservationMoment
				// item={programInformation}
				onSelected={handlerSelectedReservation}
			/>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	return: {
		position: 'absolute',
		zIndex: 2,
		top: '2%',
		left: '3%',
	},
	returnText: {
		color: COLORS.ultraDarkBlue,
		fontSize: 18,
		fontWeight: 'bold',
	},
});
