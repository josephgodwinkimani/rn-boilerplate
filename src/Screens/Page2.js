/**
 * Page2.js
 * rn-boilerplate
 * https://github.com/josephgodwinkimani/rn-boilerplate
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import Footer from '../components/Footer';

const Page2 = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome to rn-boilerplate!</Text>
            <Text style={styles.subtitle}>This is the Page2 Screen</Text>
            <Button
                title='Go back'
                onPress={() => navigation.navigate("Home")}
            />
            <Footer />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 18,
        color: '#666',
        marginBottom: 20,
    },
});

export default Page2;