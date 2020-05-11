import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
} from 'react-native';

const App = () => {
    let { view, text } = styles
    return (
        <SafeAreaView style={view}>
            <View style={view}>
                <Text style={text}> Auth </Text>
            </View>
        </SafeAreaView>

    )
}

export default App

const styles = StyleSheet.create({
    view: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 20,
    }
})