/**
 * Footer.js
 * rn-boilerplate
 * https://github.com/josephgodwinkimani/rn-boilerplate
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { version } from '../../package.json';
import { displayName } from '../../app.json';

const Footer = () => {
    return (
        <View style={styles.footer}>
            <Text style={styles.footerText}>{displayName} v{version} | Current Date: {new Date().toLocaleDateString()}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
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
    },
    footerText: {
        color: '#333',
        fontSize: 16,
    },
});

export default Footer;
