/**
 * Styles.js
 * rn-boilerplate
 * https://github.com/josephgodwinkimani/rn-boilerplate
 *
 * @format
 * @flow strict-local
 */

import { StyleSheet } from 'react-native';

export const css = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#f0f0f0',
		fontFamily: 'SourceSansPro-Regular',
	},
	title: {
		fontSize: 24,
		fontWeight: 'bold',
		marginBottom: 10,
		fontFamily: 'SourceSansPro-Black',
	},
	subtitle: {
		fontSize: 18,
		color: '#666',
		marginBottom: 20,
		fontFamily: 'SourceSansPro-Black',
	},
	modalBackground: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'rgba(0, 0, 0, 0.5)',
	},
	modalContainer: {
		width: '80%',
		padding: 20,
		backgroundColor: 'white',
		borderRadius: 10,
		alignItems: 'center',
		fontFamily: 'SourceSansPro-Regular',
	},
	modalTitle: {
		fontSize: 20,
		fontWeight: 'bold',
		marginBottom: 15,
		fontFamily: 'SourceSansPro-Black',
	},
	updateMessage: {
		textAlign: 'center',
		marginBottom: 20,
		fontFamily: 'SourceSansPro-Regular',
	},
	buttonContainer: {
		width: '100%',
		flexDirection: 'row',
		justifyContent: 'center',
		fontFamily: 'SourceSansPro-Regular',
	},
	buttonSpacer: {
		width: 20,
	},
	progressContainer: {
		alignItems: 'center',
		marginTop: 10,
		fontFamily: 'SourceSansPro-Regular',
	},
	progressText: {
		marginTop: 10,
		fontFamily: 'SourceSansPro-Regular',
	},
	footer: {
		position: 'absolute',
		bottom: 0,
		left: 0,
		right: 0,
		backgroundColor: '#f8f8f8',
		padding: 10,
		alignItems: 'center',
		borderTopWidth: 1,
		borderTopColor: '#e0e0e0',
		fontFamily: 'SourceSansPro-Regular',
	},
	footerText: {
		color: '#333',
		fontSize: 16,
		fontFamily: 'SourceSansPro-Regular',
	},
});
