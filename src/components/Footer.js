/**
 * Footer.js
 * rn-boilerplate
 * https://github.com/josephgodwinkimani/rn-boilerplate
 *
 * @format
 * @flow strict-local
 */

import { css } from '../Styles';
import React from 'react';
import { View, Text } from 'react-native';
import { version } from '../../package.json';
import { displayName } from '../../app.json';

const Footer = () => {
	return (
		<View style={css.footer}>
			<Text style={css.footerText}>
				{displayName} v{version} | Current Date:{' '}
				{new Date().toLocaleDateString()}
			</Text>
		</View>
	);
};

export default Footer;
