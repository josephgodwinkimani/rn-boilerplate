/**
 * Notifications.js
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

export default function NotificationsScreen({ navigation }) {
    return (
        <View style={css.container}>
            <Text>This is the Notifications Screen</Text>
            <Button onPress={() => navigation.goBack()} title="Go back" />
            <Footer />
        </View>
    );
}
