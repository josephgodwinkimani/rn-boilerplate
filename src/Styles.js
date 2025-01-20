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
        fontFamily: 'SourceSansPro-Black'
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
        fontFamily: 'SourceSansPro-Black'
    },
    subtitle: {
        fontSize: 18,
        color: '#666',
        marginBottom: 20,
        fontFamily: 'SourceSansPro-Black'
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
        fontFamily: 'SourceSansPro-Black'
    },
    footerText: {
        color: '#333',
        fontSize: 16,
        fontFamily: 'SourceSansPro-Black'
    },
});