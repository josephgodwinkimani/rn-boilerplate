/**
 * Page2.js
 * rn-boilerplate
 * https://github.com/josephgodwinkimani/rn-boilerplate
 *
 * @format
 * @flow strict-local
 */

import { css } from '../Styles';
import React from 'react';
import { View, Text, Button } from 'react-native';
import Footer from '../components/Footer';

const Page2 = ({ navigation }) => {
	return (
		<View style={css.container}>
			<Text style={css.title}>Welcome to rn-boilerplate!</Text>
			<Text style={css.subtitle}>This is the Page2 Screen</Text>
			<Button title="Go back" onPress={() => navigation.navigate('Home')} />
			<Footer />
		</View>
	);
};

export default Page2;
