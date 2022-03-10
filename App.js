import { ProgramsNavigator, TabNav } from './src/navigation/ProgramsNavigator';
import { StyleSheet, Text, View } from 'react-native';

import { IndexNavigation } from './src/navigation/IndexNavigation';
import { Provider } from 'react-redux'; // Par poder integrar el Store a la app, debo importarla aquí
import React from 'react';
import { init } from './src/db/idexDB';
import store from './src/store'; // Par poder integrar el Store a la app, debo importarla aquí

init()
	.then(() => {
		console.log('DB initialized');
	})
	.catch((err) => {
		console.log('DB initialization failed', err);
	});

export default function App() {
	return (
		<Provider store={store}>
			<IndexNavigation />
		</Provider>
	);
}
// TOdo deberá estar dentro del provider (proveedor de datos), y el store={}, tendrá la carpeta que nosotros denominamos store, la cual almacena los archivos de los reducers
const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});
