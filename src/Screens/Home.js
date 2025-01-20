/**
 * Home.js
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

const Home = ({ navigation }) => {
    return (
        <View style={css.container}>
            <Text style={css.title}>Welcome to rn-boilerplate!</Text>
            <Text style={css.subtitle}>This is the Home Screen</Text>
            <Button
                title='Go to Page2'
                style={{ marginBottom: 10, }}
                onPress={() => navigation.navigate('Page2')} // Assuming you have a Page 2 screen
            />
            <Button
                title='Go to Screen1 with Drawer'
                onPress={() => navigation.navigate('DrawerManager')} // Assuming you have a Drawer2 screen
            />
            <Footer />
        </View>
    );
};

export default Home;