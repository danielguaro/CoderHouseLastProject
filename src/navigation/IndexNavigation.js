import { Dimensions, Platform, StyleSheet, View } from 'react-native';
import { screenOptions, screenOptionsTab } from './navigatorOptions';

import { COLORS } from '../styles/colors';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { NavigationContainer } from '@react-navigation/native';
import { ProgramsNavigator } from './ProgramsNavigator';
import React from 'react';
import { ReservationNavigator } from './ReservationNavigate';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();
const { height, width } = Dimensions.get('window');
export const IndexNavigation = () => {
	return (
		<NavigationContainer>
			<Tab.Navigator initialRouteName="Home" screenOptions={optionsBar}>
				<Tab.Screen
					name="Inicio"
					component={ProgramsNavigator}
					options={{
						tabBarIcon: () => (
							<MaterialCommunityIcons
								name="paw"
								color={COLORS.darkBlue}
								size={34}
							/>
						),
					}}
				/>
				<Tab.Screen
					name="lista reservas"
					component={ReservationNavigator}
					options={{
						tabBarIcon: () => (
							<MaterialCommunityIcons
								name="calendar-clock-outline"
								color={COLORS.darkBlue}
								size={34}
							/>
						),
					}}
				/>
			</Tab.Navigator>
		</NavigationContainer>
	);
};

const optionsBar = {
	headerTintColor: '#fff',
	headerTitleStyle: { fontWeight: 'bold' },
	headerTitleAlign: 'center',
	headerStyle: {
		backgroundColor: Platform.OS === 'ios' ? '' : COLORS.darkBlue,
	},
	headerShown: false,
	// tabBarIcon: () => {
	// 	return <View />;
	// },
	tabBarStyle: {
		backgroundColor: COLORS.lightBlue,
	},
	// tabBarLabelStyle: {
	// 	color: COLORS.ultraDarkBlue,
	// 	fontSize: 20,
	// 	fontWeight: 'bold',
	// },
	tabBarShowLabel: false, // Para quitar el texto
};
