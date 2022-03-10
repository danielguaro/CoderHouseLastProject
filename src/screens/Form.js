import {
	SafeAreaView,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from 'react-native';

import { COLORS } from '../styles/colors';
import { FormComponent } from '../components/FormComponent';
import React from 'react';

export const Form = ({ navigation }) => {
	const handlerNavigate = () => {
		navigation.navigate('Programs');
	};

	return (
		<SafeAreaView style={styles.container}>
			<View>
				<TouchableOpacity
					style={styles.return}
					onPress={() => navigation.goBack()}
				>
					<Text style={styles.returnText}>Volver</Text>
				</TouchableOpacity>
			</View>
			<FormComponent onSelected={handlerNavigate} />
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
});
