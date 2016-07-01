'use strict';
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    TouchableHighlight,
} from 'react-native';

export default class SearchPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchString: 'london'
        };
    }
    onSearchTextChanged(event) {
        console.log('onSearchTextChanged');
        this.setState({ searchString: event.nativeEvent.text });
        console.log(this.state.searchString);
    }


    render() {
        return (
            <View style={styles.container}>
                <Text style = {styles.description}>
                    搜索你中意的房子!
                </Text>
                <Text style = {styles.description}>
                    可以搜索地名,邮编或者选择本地信息
                </Text>
                <View style = {styles.flowRight}>
                    <TextInput
                        style = {styles.searchInput}
                        value={this.state.searchString}
                        onChange={this.onSearchTextChanged.bind(this)}
                        placeholder = '搜索地名或者邮编'/>
                    <TouchableHighlight style={styles.button}
                                        underlayColor='#99d9f4'>
                        <Text style = {styles.buttonText}>搜索</Text>
                    </TouchableHighlight>
                </View>
                <TouchableHighlight style = {styles.button}
                                    underlayColor='#99d9f4'>
                    <Text style = {styles.buttonText}>本地信息</Text>
                </TouchableHighlight>
                <Image source = {require('./src/house.png')}
                               style={styles.image}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({

    description: {
        marginBottom: 20,
        fontSize: 18,
        textAlign: 'center',
        color: '#656565'
    },
    container: {
        padding: 30,
        marginTop: 65,
        alignItems: 'center'
    },
    flowRight: {
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'stretch',
    },
    buttonText: {
        fontSize: 18,
        color: 'white',
        alignSelf: 'center',
        textAlign: 'center',
    },
    button: {
        height: 36,
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#48BBEC',
        borderColor: '#48BBEC',
        borderWidth: 1,
        borderRadius: 8,
        marginBottom: 10,
        alignSelf: 'stretch',
        justifyContent: 'center',
    },
    searchInput: {
        height: 36,
        padding: 4,
        marginRight: 5,
        flex: 4,
        fontSize: 18,
        borderWidth: 1,
        borderColor: '#48BBEC',
        borderRadius: 8,
        color: '#48BBEC',
    },
    image: {
        resizeMode: Image.resizeMode.contain,
        width: 217,
        height: 138
    }
});