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
import { useDispatch, useSelector } from 'react-redux'; // Debo importar el useSelector de react-redux para poder seleccionar los datos dentro del store

import { COLORS } from '../styles/colors';
import { ItemCategories } from '../components/ItemCategories';
import { ListProgramas } from '../components/listProgramas';
import React from 'react';
import { SELECT_DESCRIPTION } from '../store/actions/description.action'; // Para la ejecución del action .... NO se si aquí debía ser selectDescription OJOOO duda
import { logOff } from '../store/actions/user.actions';
import { selectDescriptionAction } from '../store/actions/description.action';

//import { DESCRIPTION } from '../data/description'; // Gracias a redux (useSelector) ya NO necesitaría esto, ya que se toman los valores seteados directamente desde el store

const { height, width } = Dimensions.get('window');
export const Programas = ({ navigation }) => {
	// Generamos el disparador del store.
	const dispatch = useDispatch();
	const programs = useSelector((state) => state.description.description); /////////////*Si no coloco .description NO arroja nada, como lo pintaba la clase, aquí era selected */

	/* state = estado GLOBAL --> El equivalente al RootReducer
	.descriptio = description DEFINIDO en el RootReducer (el que esta en el index.js), donde combinamos los reducers creados
	.selected = el que inicialmente es null y fue creado en description.reducers.js, dentro de la constante(objeto) initialState
	*/

	const userInfo = useSelector((state) => state.user.userInfo);
	const handrleSelectedProgram = (item) => {
		/* AGREGO*/
		dispatch(selectDescriptionAction(item.id));

		navigation.navigate('ProgramDetail', {
			// categoryId: item.id,
			// open: item.open,
			// close: item.close,
			// img: item.img,
			// description: item.description,
		});
	};

	const handleLogOff = () => {
		dispatch(logOff());
	};

	const renderPorgrams = ({ item }) => {
		return <ItemCategories item={item} onSelected={handrleSelectedProgram} />;
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
				<View style={styles.header}>
					<Text style={styles.headerText}> Programas </Text>
					<Text style={styles.hTwo}>
						Contamos con tres tipos de programas, los cuales se acomodarán
						perfecto a las necesidades tuyas y de tu mascota
					</Text>
				</View>
				<FlatList
					data={programs} //Este era el que teniá previamente filterProgram --> Cambié el origen de la data (creo que se debe cambiar a programs)
					renderItem={renderPorgrams}
					keyExtractor={(item) => item.id}
				/>
				{userInfo ? (
					<TouchableOpacity
						onPress={() => handleLogOff()}
						style={styles.button1}
					>
						<Text style={styles.textButton}>Log out</Text>
					</TouchableOpacity>
				) : (
					<Text></Text>
				)}
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
	button1: {
		marginTop: 20,
		width: '20%',
		backgroundColor: COLORS.mediumBlue,
		alignItems: 'center',
		justifyContent: 'center',
		height: '6%',
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
