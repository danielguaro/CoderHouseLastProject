import {
	Dimensions,
	SafeAreaView,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { COLORS } from '../styles/colors';
import React from 'react';

const { height, width } = Dimensions.get('window');

export const Home = ({ navigation }) => {
	//Cosas creadas 8-03
	const userInfo = useSelector((state) => state.user.userInfo);

	// cierre de las cosas creadas

	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.header}>
				<Text style={styles.headerText}> Bienvenido a Pet&Walk</Text>
				<Text style={styles.hTwo}>
					{' '}
					Somos el equipo perfecto para cuidar a tu peludo
				</Text>
			</View>
			<TouchableOpacity
				style={styles.button}
				onPress={() => {
					navigation.navigate('UserRegister');
				}}
			>
				<Text style={styles.regis_information}>Registra tu Peludo</Text>
			</TouchableOpacity>
			<TouchableOpacity
				style={styles.buttonTwo}
				onPress={() => {
					navigation.navigate('Programs');
				}}
			>
				<Text style={styles.regis_information}>Conoce nuestros programas</Text>
			</TouchableOpacity>
			{userInfo ? (
				<TouchableOpacity
					style={styles.buttonThree}
					onPress={() => {
						navigation.navigate('Profile');
					}}
				>
					<Text style={styles.regis_information}>Perfil del usuario</Text>
				</TouchableOpacity>
			) : (
				<Text></Text>
			)}
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: COLORS.ultraLightBlue,
	},
	header: {
		// margin: 6,
		height: height * 0.2,
		backgroundColor: COLORS.ultraDarkBlue,
		marginBottom: 20,
		justifyContent: 'center',
	},
	headerText: {
		fontSize: 22,
		color: COLORS.whiteBlue,
		textAlign: 'center',
		fontWeight: 'bold',
	},
	hTwo: {
		marginTop: 5,
		fontSize: 16,
		color: COLORS.whiteBlue,
		textAlign: 'center',
	},
	button: {
		margin: 6,
		height: height * 0.15,
		backgroundColor: COLORS.mediumBlue,
		justifyContent: 'center',
		borderWidth: 2,
		borderColor: COLORS.ultraDarkBlue,
		borderRadius: 6,
		elevation: 10,
		marginBottom: 20,
	},
	regis_information: {
		fontSize: 22,
		color: COLORS.whiteBlue,
		marginLeft: 14,
	},
	buttonTwo: {
		margin: 6,
		height: height * 0.15,
		backgroundColor: COLORS.darkBlue,
		justifyContent: 'center',
		borderWidth: 2,
		borderColor: COLORS.ultraDarkBlue,
		borderRadius: 6,
		elevation: 10,
		marginBottom: 20,
	},
	buttonThree: {
		margin: 6,
		height: height * 0.15,
		backgroundColor: COLORS.ultraDarkBlue,
		justifyContent: 'center',
		borderWidth: 2,
		borderColor: COLORS.ultraDarkBlue,
		borderRadius: 6,
		elevation: 10,
		marginBottom: 20,
	},
});
