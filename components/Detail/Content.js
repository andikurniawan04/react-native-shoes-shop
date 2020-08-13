import React from 'react';
import {View, StyleSheet, Text, ScrollView, Button, TouchableOpacity} from 'react-native';

import Dot from './Dot';
import SizeButton from './SizeButton';
import TextContent from './TextContent';
import AddButton from './AddButton';
import Footer from './Footer.js';

const Content = () => {
    return (
        <ScrollView style={styles.container}>
            <View>
                <Text style={[styles.title, {fontSize: 24}]}>$180</Text>
            </View>
            <View opacity={0.2}>
                <Text style={[styles.title, {fontSize: 34}]} opacity={0.2}>NIKE JOYRIDE RUN FLYKNIT</Text>
            </View>
            <View style={styles.dotContainer}>
                <Dot color="#2379F4"></Dot>
                <Dot color="#FB6E53"></Dot>
                <Dot color="#FFF"></Dot>
                <Dot color="#000"></Dot>
            </View>
            <View style={{flexDirection: 'row', width: '100%', height: '10%',}}>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    <SizeButton bgColor="#17181A" color="#FFF">43</SizeButton>
                    <SizeButton>44</SizeButton>
                    <SizeButton>45</SizeButton>
                </ScrollView>    
            </View>
            <TextContent />
            <AddButton />
            <View style={styles.line} />
            <Footer />
            
            
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: '50%',
        marginHorizontal: '5%'
    },
    title: {
        fontFamily: 'Anton-Regular'
    },
    dotContainer: {
        flexDirection: 'row',
        marginVertical: '5%'
    },
    line: {
        marginVertical: '2%',
        borderBottomColor: '#000',
        borderBottomWidth: 1
    }
});

export default Content;