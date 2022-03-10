import {
	Dimensions,
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
export const ItemCategories = ({ item, onSelected }) => {
	console.log('item Categories: ', item);
	return (
		<View style={styles.container}>
			<TouchableOpacity style={styles.button} onPress={() => onSelected(item)}>
				<View>
					<Text style={styles.headerText}>{item.title}</Text>
					<Text style={styles.hTwo}>{item.status}</Text>
				</View>
			</TouchableOpacity>
		</View>
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
		color: COLORS.mediumBlue,
		fontSize: 18,
		fontWeight: 'bold',
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
		fontSize: 12,
		color: COLORS.whiteBlue,
		textAlign: 'center',
	},
	button: {
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
	regis_information: {
		fontSize: 22,
		color: COLORS.whiteBlue,
		marginLeft: 14,
	},
});
