/**
 * DrawerManager.js
 * rn-boilerplate
 * https://github.com/josephgodwinkimani/rn-boilerplate
 *
 * @format
 * @flow strict-local
 */

import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Screen2 from './Screens/Screen2';
import NotificationsScreen from './Screens/Notifications';

const Drawer = createDrawerNavigator();

export default function DrawerManager() {
	return (
		<Drawer.Navigator initialRouteName="Screen2">
			<Drawer.Screen name="Screen2" component={Screen2} />
			<Drawer.Screen name="Notifications" component={NotificationsScreen} />
		</Drawer.Navigator>
	);
}
