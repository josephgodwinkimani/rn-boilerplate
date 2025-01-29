/**
 * Screen2.js
 * rn-boilerplate
 * https://github.com/josephgodwinkimani/rn-boilerplate
 *
 * @format
 * @flow strict-local
 */

import { css } from '../Styles';
import * as React from 'react';
import { Text, Button, View } from 'react-native';
import Footer from '../components/Footer';

export default function Screen2({ navigation }) {
	return (
		<View style={css.container}>
			<Text>This is the Screen2</Text>
			<Button
				onPress={() => navigation.navigate('Notifications')}
				title="Go to notifications"
			/>
			<Button onPress={() => navigation.navigate('Home')} title="Go to Home" />
			<Footer />
		</View>
	);
}
