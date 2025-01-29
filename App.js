/**
 * rn-boilerplate
 * https://github.com/josephgodwinkimani/rn-boilerplate
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/Screens/Home';
import Page2 from './src/Screens/Page2';
import DrawerManager from './src/DrawerManager';

const Stack = createStackNavigator();

function NavStack() {
	return (
		<Stack.Navigator
			initialRouteName="Home"
			screenOptions={{
				headerTitleAlign: 'center',
				headerStyle: {
					backgroundColor: '#0e0e0e',
				},
				headerTintColor: '#fff',
				headerTitleStyle: {
					//fontWeight: 'bold',
					fontFamily: 'SourceSansPro-Black',
				},
			}}
		>
			<Stack.Screen
				name="Home"
				component={Home}
				options={{
					headerShown: false,
					title: 'rnboilerplate',
				}}
			/>
			<Stack.Screen
				name="DrawerManager"
				component={DrawerManager}
				options={{
					headerShown: false,
					title: 'With Drawer',
				}}
			/>
			<Stack.Screen
				name="Page2"
				component={Page2}
				options={{
					headerShown: false,
					title: 'Page 2',
				}}
			/>
		</Stack.Navigator>
	);
}
export default function App() {
	return (
		<NavigationContainer>
			<NavStack />
		</NavigationContainer>
	);
}
