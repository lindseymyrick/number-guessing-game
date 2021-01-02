import React from 'react';
import {View, StyleSheet, Text, TextInput, Button } from 'react-native';
import Card from '../../components/Card/Card';

const StartGameScreen = props => {
    return(
        <View style={styles.screen}>
            <Text> Start a New Game! </Text>
            <Card>
                {/* <Text style={styles.title}>Select a Number </Text>
                <TextInput />
                <View style={styles.buttonView}>
                    <Button title="Reset" onPress={()=> {}} />
                    <Button title="Confirm" onPress={()=> {}} />
                </View> */}

            </Card>
        </View>
    );

};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
    },
    buttonView: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
    },
    title: {
        fontSize: 20,
        marginVertical: 10,
    },   
    inputView: {
        width: 300,
        maxWidth: '80%',
        alignItems: 'center',
    },
});

export default StartGameScreen;