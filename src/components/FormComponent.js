import * as ImagePicker from 'react-native-image-picker';

import {
	Alert,
	Image,
	KeyboardAvoidingView,
	PermissionsAndroid,
	Platform,
	ScrollView,
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from 'react-native';
import { PERMISSIONS, RESULTS, request } from 'react-native-permissions';
import React, { useCallback, useReducer, useState } from 'react';

import { COLORS } from '../styles/colors';
import { CameraComponent } from './CameraComponent';
import { Picker } from '@react-native-picker/picker';
import { launchCamera } from 'react-native-image-picker';
import { signUp } from '../store/actions/user.actions';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

export const FormComponent = ({ onSelected }) => {
	const navigate = useNavigation();
	const [owner, setOwner] = useState('');
	const [petName, setPetName] = useState('');
	const [sex, setSex] = useState('');
	const [photo, setPhoto] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const IS_IOS = Platform.OS === 'ios';

	// console.log('Soy onSelected => ', onSelected, setOwner);
	const dispatch = useDispatch();

	const handleRegister = () => {
		dispatch(signUp(owner, petName, sex, photo, email, password));
	};

	//PARA LA FOTO
	const verifyPermission = async () => {
		try {
			const granted = await PermissionsAndroid.request(
				PermissionsAndroid.PERMISSIONS.CAMERA,
				{
					title: 'PET&WALK APP Camera Permission',
					message: 'PET&WALK APP App needs access to your camera',
					buttonNeutral: 'Ask me Later',
					buttonNegative: 'Cancel',
					buttonPositive: 'OK',
				}
			);
			if (granted === PermissionsAndroid.RESULTS.GRANTED) {
				return true;
			} else {
				return false;
			}
		} catch (err) {
			console.log(err);
		}
	};

	const handleTakePhoto = async () => {
		const isCamaraOk = await verifyPermission();
		if (!isCamaraOk) return;

		let options = {
			storageOptions: {
				skipBackup: true,
				path: 'images',
			},
		};
		await ImagePicker.launchCamera(options, (response) => {
			console.log('Response = ', response);

			if (response.didCancel) {
				console.log('User cancelled image picker');
			} else if (response.error) {
				console.log('ImagePicker Error: ', response.error);
			} else if (response.customButton) {
				console.log('User tapped custom button: ', response.customButton);
				alert(response.customButton);
			} else {
				const source = { uri: response.uri };
				console.log('response', JSON.stringify(response));
				setPhoto(response.assets[0].uri); //setPhoto
			}
		});
	};

	//

	return (
		<KeyboardAvoidingView behavior="height" style={styles.container}>
			<View style={styles.main}>
				<ScrollView>
					<Text style={styles.label0}>Nombre y Apellido</Text>
					<TextInput
						style={styles.input}
						placeholder="Ej. Pepe Perez"
						keyboardType="default"
						onChangeText={(text) => setOwner(text)} //Retorna el valor
						value={owner}
					/>
					<Text style={styles.label}>Nombre de tu mascota</Text>
					<TextInput
						style={styles.input}
						placeholder="Ej. Firulais"
						keyboardType="default"
						onChangeText={(text) => setPetName(text)}
						value={petName}
					/>
					<Text style={styles.label}>Sexo de tu mascota</Text>
					<Picker
						selectedValue={sex}
						onValueChange={(itemValue, itemIndex) => setSex(itemValue)}
					>
						<Picker.Item label="" value="" />
						<Picker.Item label="Hembra" value="Hembra" />
						<Picker.Item label="Macho" value="Macho" />
					</Picker>
					{/* <Text style={styles.label}>Foto de tu mascota</Text> */}
					{/* <TextInput
						style={styles.input}
						placeholder="ESTE ESTA PENDIENTE"
						keyboardType="default"
						onChangeText={(text) => setPhoto(text)}
						value={photo}
					/> */}
					<TouchableOpacity
						onPress={() => {
							handleTakePhoto();
							// navigate.navigate('CameraComponent');
						}}
					>
						<Text style={styles.label}>Foto de tu mascota</Text>
						{!photo ? (
							<Text>No se ha seleccionado una imagen</Text>
						) : (
							<Image style={styles.photo} source={{ uri: photo }} />
						)}
					</TouchableOpacity>
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
			</View>
			<TouchableOpacity
				style={styles.button}
				onPress={() => onSelected(handleRegister())}
			>
				<Text style={styles.textButton}>Registrarse</Text>
			</TouchableOpacity>
		</KeyboardAvoidingView>
	);
};

const styles = StyleSheet.create({
	container: {
		marginTop: 10,
		flex: 1,
		alignItems: 'center',
	},
	main: {
		width: '80%',
		padding: 12,
		margin: 12,
		borderWidth: 1,
		borderColor: COLORS.ultraDarkBlue,
		borderRadius: 10,
		height: '76%',
		backgroundColor: COLORS.whiteBlue,
		elevation: 6,
	},
	label0: {
		fontWeight: 'bold',
		fontSize: 15,
		color: COLORS.darkBlue,
	},
	label: {
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
		width: '26%',
		backgroundColor: COLORS.mediumBlue,
		alignItems: 'center',
		justifyContent: 'center',
		height: '6%',
		borderRadius: 16,
		elevation: 8,
		borderWidth: 1,
		borderColor: COLORS.darkBlue,
	},
	textButton: {
		fontWeight: 'bold',
	},
	photo: {
		width: 100,
		height: 100,
		borderRadius: 22,
	},
});
