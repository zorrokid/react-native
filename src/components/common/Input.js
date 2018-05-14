import React from 'react';
import { TextInput, View, Text } from 'react-native';

// functional component
const Input = ({ label, value, onChangeText, placeholder, secureTextEntry }) => {
    const { inputStyle, labelStyle, containerStyle } = styles;
    return (
        <View style={containerStyle}>
            <Text style={labelStyle}>{label}</Text>
            <TextInput
                secureTextEntry={secureTextEntry} 
                placeholder={placeholder}
                autoCorrect={false}
                style={inputStyle}
                value={value}
                onChangeText={onChangeText}
            />
        </View>
    );
};

const styles = {
    inputStyle: {
        color: '#000',
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 18,
        lineHeight: 23,
        // allocating space between siblings (2/3)
        flex: 2
    },
    labelStyle: {
        fontSize: 18,
        paddingLeft: 20,
        // allocating space between siblings (1/3)
        flex: 1
    },
    containerStyle: {
        height: 40,
        // fill all available space
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    }
};

export {Input};