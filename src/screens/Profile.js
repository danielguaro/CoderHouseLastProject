import * as informationAction from '../store/actions/user.actions';

import {
	Dimensions,
	Image,
	SafeAreaView,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from 'react-native';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { COLORS } from '../styles/colors';

const { height, width } = Dimensions.get('window');
export const Profile = ({ navigation }) => {
	const dispatch = useDispatch();
	const userInfo = useSelector((state) => state.user.userInfo);
	console.log('UserIfo_PROFILE---->', userInfo);
	useEffect(() => {
		dispatch(informationAction.loadPlaces());
	}, []);
	return (
		<SafeAreaView style={styles.container}>
			<View>
				<TouchableOpacity
					style={styles.return}
					onPress={() => navigation.goBack()}
				>
					<Text style={styles.returnText}>Volver</Text>
				</TouchableOpacity>
				<View style={styles.main}>
					<Text style={styles.text}>
						Usuario: <Text style={styles.information}> {userInfo.owner}</Text>{' '}
					</Text>
					<Text style={styles.text}>
						Can 🐶: <Text style={styles.information}> {userInfo.petName}</Text>{' '}
					</Text>
					<Text style={styles.text}>
						Genero: <Text style={styles.information}> {userInfo.sex}</Text>{' '}
					</Text>
					<Text style={styles.text}>
						Correo: <Text style={styles.information}> {userInfo.email}</Text>{' '}
					</Text>
					<Text style={styles.text}>Foto mascota:</Text>
					<Image style={styles.photo} source={{ uri: userInfo.photo }} />
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
	main: {
		marginTop: height * 0.06,
		width: width * 0.8,
		height: height * 0.8,
		borderWidth: 2,
		borderColor: COLORS.mediumBlue,
		backgroundColor: COLORS.whiteBlue,
		elevation: 8,
		alignSelf: 'center',
		// justifyContent: 'center',
		borderRadius: 20,
	},
	text: {
		fontSize: 18,
		color: COLORS.darkBlue,
		marginLeft: 10,
		marginTop: 20,
	},
	information: {
		fontSize: 18,
		color: COLORS.ultraDarkBlue,
	},
	photo: {
		width: 200,
		height: 200,
		borderRadius: 22,
		alignSelf: 'center',
		marginTop: 16,
		borderWidth: 2,
		borderColor: COLORS.mediumBlue,
	},
});
