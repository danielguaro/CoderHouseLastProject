import {
	Button,
	Dimensions,
	Image,
	SafeAreaView,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from 'react-native';
import React, { useState } from 'react';

import { COLORS } from '../styles/colors';

const { height, width } = Dimensions.get('window');
export const RegistroUsuarios = ({ onSelected, onSelected2 }) => {
	const image =
		'https://images.pexels.com/photos/5255255/pexels-photo-5255255.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940';
	return (
		<SafeAreaView style={styles.container}>
			<View>
				<Image style={styles.image} source={{ uri: image }} />
				<View style={styles.mainContainer}>
					<Text style={styles.mainTitle}>REGISTRO</Text>
					<TouchableOpacity style={styles.form} onPress={() => onSelected()}>
						<Text style={styles.formText}>Formulario</Text>
					</TouchableOpacity>
					<Text style={styles.mainText}>¿Ya tienes cuenta registrada? </Text>
					<TouchableOpacity style={styles.logIn} onPress={() => onSelected2()}>
						<Text style={styles.textLogIn}>Ingresa</Text>
					</TouchableOpacity>
				</View>
			</View>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: COLORS.ultraLightBlue,
	},
	image: {
		width: width * 1,
		height: height * 0.4,
	},
	mainContainer: {
		position: 'absolute',
		zIndex: 2,
		backgroundColor: COLORS.ultraDarkBlue,
		paddingVertical: 14,
		paddingHorizontal: 24,
		right: '14%',
		top: '90%',
		elevation: 10,
		borderWidth: 2,
		borderColor: COLORS.mediumBlue,
		borderRadius: 20,
		width: '70%',
		height: '70%',
		// alignItems: 'center',
	},
	mainTitle: {
		fontSize: 26,
		color: COLORS.whiteBlue,
		fontWeight: 'bold',
		marginBottom: 5,
		alignSelf: 'center',
	},
	form: {
		marginTop: 6,
		marginBottom: 26,
	},
	formText: {
		fontSize: 18,
		color: COLORS.lightBlue,
		fontWeight: 'bold',
	},
	mainText: {
		fontSize: 16,
		color: COLORS.whiteBlue,
		fontWeight: 'bold',
	},
	logIn: {
		marginTop: 10,
	},
	textLogIn: {
		fontSize: 24,
		color: COLORS.mediumBlue,
		fontWeight: 'bold',
		alignSelf: 'center',
	},
});
