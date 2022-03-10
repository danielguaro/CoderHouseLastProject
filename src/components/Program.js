import {
	Dimensions,
	Image,
	ImageBackground,
	SafeAreaView,
	ScrollView,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from 'react-native';

import { COLORS } from '../styles/colors';
import React from 'react';

const { height, width } = Dimensions.get('window');
export const Program = ({ item, onSelected }) => {
	console.log('item Program: ', item);
	const image = item.img;
	return (
		<View style={styles.container}>
			<View style={styles.hours}>
				<Text style={styles.textHourS}>Inicio: {item.open}</Text>
				<Text style={styles.textHourF}>Final: {item.close}</Text>
			</View>
			<Image style={styles.image} source={{ uri: image }} />
			<ScrollView>
				<View style={styles.contDescription}>
					<Text style={styles.description}>{item.description}</Text>
				</View>
				<View style={styles.contReserv}>
					<TouchableOpacity onPress={() => onSelected(item)}>
						<Text>Reserva 🐶</Text>
					</TouchableOpacity>
				</View>
			</ScrollView>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: COLORS.ultraLightBlue,
		// height: height * 1,
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
});
