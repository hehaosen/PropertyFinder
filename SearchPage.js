'use strict';
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TextInput
} from 'react-native';

export default class SearchPage extends Component {
    render() {
        return (
            <Text>Search for houses to buy!
            Search by place-name, postcode or search near your location.
            </Text>
        );
    }
}

