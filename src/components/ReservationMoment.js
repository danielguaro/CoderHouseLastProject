import {
	Button,
	Dimensions,
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from 'react-native';
import React, { useState } from 'react';
import { signIn, signUp } from '../store/actions/user.actions';
import { useDispatch, useSelector } from 'react-redux';

import { COLORS } from '../styles/colors';
import DatePicker from 'react-native-date-picker';
import { Picker } from '@react-native-picker/picker';
import { createtReservation } from '../store/actions/reservation.action';

const HOURS = [
	'6:00',
	'7:00',
	'8:00',
	'9:00',
	'10:00',
	'11:00',
	'12:00',
	'13:00',
	'14:00',
	'15:00',
	'16:00',
	'17:00',
	'18:00',
];

const { height, width } = Dimensions.get('window');
export const ReservationMoment = ({ onSelected }) => {
	const [day, setDay] = useState(new Date());
	const [open, setOpen] = useState(false);
	const userInfo = useSelector((state) => state.user.userInfo);

	const programInfo = useSelector((state) => state.description.selected);
	const [hour, setHour] = useState(programInfo.open);

	const renderHours = () => {
		const index = HOURS.indexOf(programInfo.open);
		HOURS.splice(0, index);
		return HOURS.map((hourItem, index) => {
			return <Picker.item label={hourItem} value={hourItem} key={index} />;
		});
	};

	return (
		<View style={styles.container}>
			<View style={styles.main}>
				<Text style={styles.mainText}>
					Hola {userInfo.owner} indicanos el día y la hora en que te gustaría
					realizar la reserva para {userInfo.petName} en el programa de
					categoría <Text style={styles.ProgramName}> {programInfo.title}</Text>
				</Text>
			</View>
			<View style={styles.inputContainer}>
				<Text style={styles.inputText}>Día:</Text>
				<Button title="Open" onPress={() => setOpen(true)} />
				<DatePicker
					modal
					mode="date"
					open={open}
					date={day}
					onConfirm={(day) => {
						setOpen(false);
						setDay(day);
					}}
					onCancel={() => {
						setOpen(false);
					}}
				/>
			</View>
			<View style={styles.inputContainer}>
				<Text style={styles.inputText}>Hora:</Text>
				<Picker
					style={styles.picker}
					selectedValue={hour}
					onValueChange={(itemValue) => setHour(itemValue)}
				>
					{renderHours()}
				</Picker>
			</View>

			<View style={styles.contReserv}>
				<TouchableOpacity onPress={() => onSelected(hour, day, programInfo)}>
					<Text>Reserva 🐶</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: COLORS.ultraLightBlue,
		height: height * 1,
	},
	main: {
		height: height * 0.3,
	},

	mainText: {
		marginTop: height * 0.06,
		padding: '5%',
		fontSize: 18,
		color: COLORS.darkBlue,
	},
	ProgramName: {
		fontSize: 20,
		color: COLORS.mediumBlue,
		textDecorationLine: 'underline',
	},
	inputContainer: {
		marginHorizontal: '5%',
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	input: {
		borderWidth: 1,
		borderColor: COLORS.darkBlue,
		width: width * 0.4,
		padding: 6,
		margin: 10,
		backgroundColor: COLORS.lightBlue,
		borderRadius: 10,
	},
	inputText: {
		fontSize: 20,
		flex: 1,
		textAlign: 'center',
		color: COLORS.darkBlue,
	},
	image: {
		width: width * 1,
		height: height * 0.4,
	},
	hours: {
		position: 'absolute',
		zIndex: 2,
		backgroundColor: COLORS.ultraDarkBlue,
		paddingVertical: 14,
		paddingHorizontal: 24,
		right: '4%',
		top: '34%',
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
	contDescription: {
		marginTop: '10%',
		padding: '5%',
	},
	description: {
		fontSize: 18,
		color: COLORS.darkBlue,
	},
	contReserv: {
		width: width * 0.3,
		height: height * 0.06,
		backgroundColor: COLORS.mediumBlue,
		justifyContent: 'center',
		alignItems: 'center',
		marginVertical: 16,
		left: '35%',
		borderWidth: 1,
		borderColor: COLORS.darkBlue,
		borderRadius: 16,
		elevation: 8,
	},
	picker: {
		flex: 1,
	},
});
