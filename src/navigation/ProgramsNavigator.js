import { screenOptions, screenOptionsTab } from './navigatorOptions';

import { COLORS } from '../styles/colors';
import { CameraScreen } from '../screens/CameraScreen';
import { DetalleProgramas } from '../screens/DetalleProgramas';
import { Form } from '../screens/Form';
import { FormComponent } from '../components/FormComponent';
import { Home } from '../screens/Home';
import { LogIn } from '../screens/LogIn';
import { MomentReservation } from '../screens/MomentReservation';
import { NavigationContainer } from '@react-navigation/native';
import { Platform } from 'react-native';
import { Profile } from '../screens/Profile';
import { Programas } from '../screens/Programas';
import React from 'react';
import { Reservation } from '../screens/Reservation';
import { UserRegister } from '../screens/UserRegister';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export const ProgramsNavigator = () => (
	// <NavigationContainer>
	<Stack.Navigator
		initialRouteName="Home"
		screenOptions={{
			headerTintColor: '#fff',
			headerTitleStyle: { fontWeight: 'bold' },
			headerTitleAlign: 'center',
			headerStyle: {
				backgroundColor: Platform.OS === 'ios' ? '' : COLORS.darkBlue,
			},
			headerShown: false, // Quita el header que viene por defecto
		}}
	>
		<Stack.Screen
			name="Home"
			component={Home}
			options={{ headerTitleAlign: 'left' }}
		/>
		<Stack.Screen
			name="Programs"
			component={Programas}
			options={{
				title: 'Programas', // Lo que hace es cambiar el nombre por defecto q ReactN le pone.
				headerStyle: { backgroundColor: COLORS.mediumBlue },
			}}
		/>
		<Stack.Screen
			name="ProgramDetail"
			component={DetalleProgramas}
			options={{
				title: 'Detalles',
				headerStyle: { backgroundColor: COLORS.mediumBlue },
			}}
			// Esto iria dentro del options, lo cual le cambia el nombre automaticamente al title: según la interfaz en la que entre, es chevere, pero debido a que QUITÉ el header title que salia por defecto ARRIBA, entonces es código innecesario:
			// ({ route }) => ({
			// 	title: route.params.name,
			// })
		/>
		<Stack.Screen name="UserRegister" component={UserRegister} />
		<Stack.Screen name="Form" component={Form} />
		<Stack.Screen name="LogIn" component={LogIn} />
		<Stack.Screen name="FormComponent" component={FormComponent} />
		<Stack.Screen name="CameraScreen" component={CameraScreen} />
		<Stack.Screen name="MomentReservation" component={MomentReservation} />
		<Stack.Screen name="Profile" component={Profile} />
		<Stack.Screen name="confirmReservartion" component={Reservation} />
	</Stack.Navigator>
	// </NavigationContainer>
);
