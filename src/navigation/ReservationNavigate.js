import { screenOptions, screenOptionsTab } from './navigatorOptions';

import { COLORS } from '../styles/colors';
import { DetalleProgramas } from '../screens/DetalleProgramas';
import { Home } from '../screens/Home';
import { ListReservation } from '../screens/ListReservations';
import { Platform } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
// const Tab = createBottomTabNavigator();

// export const TabNav = () => {
// 	return (
// 		<Tab.Navigator>
// 			<Tab.Screen name="Inicio" component={Home} />
// 			<Tab.Screen name="Reservaciones" component={Reservation} />
// 		</Tab.Navigator>
// 	);
// };

export const ReservationNavigator = () => (
	// <NavigationContainer>
	<Stack.Navigator
		initialRouteName="ListReservation"
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
			name="ListReservation"
			component={ListReservation}
			options={{
				title: 'Lista de Reservaciones',
				headerStyle: { backgroundColor: COLORS.mediumBlue },
			}}
		/>
	</Stack.Navigator>
	// </NavigationContainer>
);
