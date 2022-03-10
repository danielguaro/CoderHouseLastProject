import {
	Dimensions,
	FlatList,
	SafeAreaView,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'; // Debo importar el useSelector de react-redux para poder seleccionar los datos dentro del store

import { COLORS } from '../styles/colors';
import { DESCRIPTION } from '../data/description';
import { ItemCategories } from '../components/ItemCategories';
import { Program } from '../components/Program';
import auth from '@react-native-firebase/auth';
import { filterProgramAction } from '../store/actions/description.action';
import { selectDescriptionAction } from '../store/actions/description.action';

const { height, width } = Dimensions.get('window');

export const DetalleProgramas = ({ navigation, route }) => {
	const dispatch = useDispatch();
	const [userFirebase, setUserFirebase] = useState();
	//Generación del selector
	const programsDetails = useSelector((state) => state.description.selected);
	const userInfo = useSelector((state) => state.user.userInfo);

	const filterProgram = useSelector(
		(state) => state.description.filteredDescription // NO da con este, debería ser programs (el de arriba) Este tiene mas sentido aquí AHORA ENSAYO
	);
	// console.warn('hi', programsDetails);
	/* Inicialmente esto ya no se usaría*/
	// const details = DESCRIPTION.filter(
	// 	(detail) => detail.category === route.params.categoryId
	// );
	function onAuthStateChanged(userState) {
		setUserFirebase(userState);
	}

	useEffect(() => {
		const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
		return subscriber; // unsubscribe on unmount
	}, []);

	const handlerSelectedReservation = (item) => {
		if (userInfo) {
			dispatch(selectDescriptionAction(item.id));
			console.log('UserIfon=>', userInfo);

			return navigation.navigate('MomentReservation');
		}
		navigation.navigate('UserRegister');
	};

	return (
		<SafeAreaView style={styles.container}>
			{/* <View> */}
			<TouchableOpacity
				style={styles.return}
				onPress={() => navigation.goBack()}
			>
				<Text style={styles.returnText}>Volver</Text>
			</TouchableOpacity>
			<Program item={programsDetails} onSelected={handlerSelectedReservation} />
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
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
