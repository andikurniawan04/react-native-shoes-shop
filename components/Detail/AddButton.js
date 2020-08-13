import React from 'react';
import {TouchableOpacity, StyleSheet, Text} from 'react-native';

const AddButton = () => {
    return (
        <TouchableOpacity style={styles.container}>
            <Text style={styles.title}>ADD TO CARD</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '90%',
        height: 50,
        backgroundColor: '#17181A',
        borderRadius: 5,
        marginVertical: '5%',
        justifyContent: 'center',
        alignItems: 'center',  
    },
    title: {
        color: '#FFF',
        fontFamily: 'FiraSans-Bold',
        fontSize: 16
    }
});

export default AddButton;