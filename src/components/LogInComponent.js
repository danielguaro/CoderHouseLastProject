import {
	Button,
	KeyboardAvoidingView,
	SafeAreaView,
	ScrollView,
	StatusBar,
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from 'react-native';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { COLORS } from '../styles/colors';
import { signIn } from '../store/actions/user.actions';

export const LogInComponten = ({ onSelected }) => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const dispatch = useDispatch();

	const handleSigIn = () => {
		dispatch(signIn(email, password));
		// navigation.navigate('MomentReservation');
	};

	return (
		<KeyboardAvoidingView behavior="height" style={styles.container}>
			<View style={styles.main}>
				<ScrollView>
					<Text style={styles.label}>Email</Text>
					<TextInput
						style={styles.input}
						placeholder="@Ejemplo.com"
						keyboardType="email-address"
						onChangeText={(text) => setEmail(text)}
						value={email}
					/>
					<Text style={styles.label}>Contraseña</Text>
					<TextInput
						style={styles.input}
						placeholder="Minimo 6 caracteres"
						keyboardType="default"
						secureTextEntry
						onChangeText={(text) => setPassword(text)}
						value={password}
					/>
				</ScrollView>
				<TouchableOpacity
					style={styles.button}
					onPress={() => onSelected(handleSigIn())}
				>
					<Text style={styles.textButton}>Iniciar Sesion</Text>
				</TouchableOpacity>
			</View>
		</KeyboardAvoidingView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	main: {
		width: '80%',
		padding: 12,
		margin: 12,
		borderWidth: 1,
		borderColor: COLORS.ultraDarkBlue,
		borderRadius: 10,
		height: '48%',
		backgroundColor: COLORS.whiteBlue,
		elevation: 6,
	},
	label: {
		alignSelf: 'center',
		marginTop: 10,
		fontWeight: 'bold',
		fontSize: 15,
		color: COLORS.darkBlue,
	},
	input: {
		borderBottomWidth: 1,
		borderColor: COLORS.lightBlue,
	},
	button: {
		marginTop: 20,
		width: '44%',
		backgroundColor: COLORS.mediumBlue,
		alignItems: 'center',
		justifyContent: 'center',
		height: '16%',
		borderRadius: 16,
		elevation: 8,
		borderWidth: 1,
		borderColor: COLORS.darkBlue,
		alignSelf: 'center',
	},
	textButton: {
		fontWeight: 'bold',
	},
});
