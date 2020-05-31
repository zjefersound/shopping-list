import React, { Component } from 'react';
import { 
    View, 
    Text, 
    Image,
    FlatList,
    TouchableOpacity,
    StatusBar, 
} from 'react-native';
import { Router, Scene } from 'react-native-router-flux';

//componentes e telas
import LoadingScreen from '../LoadingScreen'; 
import List from '../List';

export default props => {
    return (
        <Router>
            <Scene key = 'root'>
                <Scene key = 'loading' component = { LoadingScreen } 
                    initial = { true } hideNavBar = { true }/>
                <Scene key = 'list' component = { List } 
                    initial = { true } hideNavBar = { true }/>
            </Scene>
        </Router>   
    );
};