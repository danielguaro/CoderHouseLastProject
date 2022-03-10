import {
	FlatList,
	SafeAreaView,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

import { COLORS } from '../styles/colors';
import { ListReservationComponent } from '../components/listReservation';
import React from 'react';
import { deleteReservation } from '../store/actions/reservation.action';
import { getReservations } from '../firebase/reservation';

export const ListReservation = ({ navigation }) => {
	const dispatch = useDispatch();
	const handlerDeleteItem = (key) => dispatch(deleteReservation(key));
	// const items = useSelector((state) => state.reservations.listReservations);
	const userInfo = useSelector((state) => state.user.userInfo);
	const [reservations, setReservations] = useState();

	useEffect(() => {
		getReservations().then((listReservations) => {
			const returnArr = [];
			listReservations.forEach(function (childSnapshot) {
				let item = childSnapshot.val();
				item.key = childSnapshot.key;

				returnArr.push(item);
			});

			setReservations(returnArr);
		});
	}, []);

	//

	// console.log(
	// 	'Reservation-->',
	// 	reservations.map((x) => x.programInfo)
	// );
	// console.log('reservaciones->', reservations);
	console.log('UserInfo->', userInfo);
	//
	const rederListReservation = ({ item }) => {
		return (
			<ListReservationComponent item={item} onDelete={handlerDeleteItem} />
		);
	};

	return (
		<SafeAreaView style={styles.container}>
			<View>
				<TouchableOpacity
					style={styles.return}
					onPress={() => navigation.goBack()}
				>
					<Text style={styles.returnText}>Volver</Text>
				</TouchableOpacity>
			</View>
			{userInfo ? (
				<FlatList
					data={reservations}
					renderItem={rederListReservation}
					keyExtractor={(item) => item.id}
				/>
			) : (
				<Text style={styles.withoutInfo}>
					No hay data de usuario registrado
				</Text>
			)}
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: COLORS.ultraLightBlue,
	},
	return: {
		position: 'absolute',
		zIndex: 2,
		top: '2%',
		left: '3%',
	},
	returnText: {
		color: COLORS.darkBlue,
		fontSize: 18,
		fontWeight: 'bold',
	},
	withoutInfo: {
		fontSize: 22,
		color: COLORS.mediumBlue,
		fontWeight: 'bold',
		marginTop: 60,
		alignSelf: 'center',
	},
});
