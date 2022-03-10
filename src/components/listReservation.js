import {
	Dimensions,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from 'react-native';

import { COLORS } from '../styles/colors';
import React from 'react';
import { getReservations } from '../firebase/reservation';
import { useSelector } from 'react-redux';

const { height, width } = Dimensions.get('window');
export const ListReservationComponent = ({
	item,
	onDelete,
	// hour,
	// day,
	// programInfo,
}) => {
	const userInfo = useSelector((state) => state.user.userInfo);
	// const programInformation = useSelector(
	// 	(state) => state.reservation.listReservations
	// );
	// console.log('programInformation->listReservation', programInformation);
	console.log('userInfo->listReservation', userInfo);
	console.log('blablab', item.key);

	let resume = JSON.stringify(item.day);
	let cambio = resume.substring(1, 11);

	return (
		<View style={styles.container}>
			<View style={styles.generalInformation}>
				<Text style={styles.textHourS}>
					Nombre de la reserva: {userInfo.petName}
				</Text>
				<Text style={styles.textHourS}>
					Programa: {item.programInfo.title} --- Hora : {item.hour}
				</Text>
				<Text style={styles.textHourF}>Dia : {cambio}</Text>
				<View>
					<TouchableOpacity
						onPress={() => onDelete(item.id)}
						style={styles.delete}
					>
						<Text style={styles.textDelete}>❌</Text>
					</TouchableOpacity>
				</View>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		marginTop: '6%',
		flex: 1,
		marginBottom: '1%',
	},
	image: {
		width: width * 1,
		height: height * 0.4,
	},
	generalInformation: {
		backgroundColor: COLORS.ultraDarkBlue,
		paddingVertical: 14,
		paddingHorizontal: 24,
		// top: '5%',
		elevation: 10,
		borderWidth: 2,
		borderColor: COLORS.mediumBlue,
		borderRadius: 20,
	},
	textHourS: {
		fontSize: 16,
		color: COLORS.whiteBlue,
		fontWeight: 'bold',
		marginBottom: 5,
	},
	textHourF: {
		fontSize: 16,
		color: COLORS.whiteBlue,
		fontWeight: 'bold',
	},
	delete: {
		position: 'absolute',
		left: '95%',
		bottom: '10%',
	},
	textDelete: {
		fontSize: 20,
	},
});
