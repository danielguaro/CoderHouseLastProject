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
import { RegistroUsuarios } from '../components/RegistroUsuarios';

const { height, width } = Dimensions.get('window');
export const UserRegister = ({ navigation }) => {
	const handleSelectForm = () => {
		navigation.navigate('Form');
	};

	const handleSelectLogIn = () => {
		navigation.navigate('LogIn');
	};

	return (
		<SafeAreaView style={styles.container}>
			<RegistroUsuarios
				onSelected={handleSelectForm}
				onSelected2={handleSelectLogIn}
			/>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: COLORS.ultraLightBlue,
	},
});
