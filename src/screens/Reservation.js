import {
	Dimensions,
	FlatList,
	Image,
	ImageBackground,
	SafeAreaView,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from 'react-native';

import { COLORS } from '../styles/colors';
import React from 'react';

const { height, width } = Dimensions.get('window');

export const Reservation = ({ navigation }) => {
	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.main}>
				<Text style={styles.mainText}>
					Tu reserva fue exitosa, muy pronto tu integrante de cuatro patas podra
					disfrutar de nuevas aventuras
				</Text>
				<TouchableOpacity
					style={styles.return}
					onPress={() => navigation.goBack()}
				>
					<Text style={styles.returnText}>Volver</Text>
				</TouchableOpacity>
			</View>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: COLORS.darkBlue,
		alignItems: 'center',
		justifyContent: 'center',
	},
	main: {
		height: height * 0.7,
		padding: 30,
		justifyContent: 'center',
		alignItems: 'center',
	},
	mainText: {
		fontSize: 40,
		textAlign: 'center',
		color: COLORS.ultraLightBlue,
	},
	return: {
		alignItems: 'center',
		backgroundColor: COLORS.ultraDarkBlue,
		width: width * 0.3,
		padding: 10,
		marginTop: '20%',
		borderWidth: 1,
		borderColor: COLORS.ultraLightBlue,
		borderRadius: 14,
		elevation: 8,
	},
	returnText: {
		color: COLORS.mediumBlue,
		fontSize: 18,
		fontWeight: 'bold',
	},
});
