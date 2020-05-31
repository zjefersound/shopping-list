import React, { Component } from 'react';
import { View, Text, Image, StatusBar } from 'react-native';
import { Actions } from 'react-native-router-flux';

//estilos e imagens 
import styles from './styles';
import logoImg from '../../../assets/images/icon.png';
import commonStyles from '../../commonStyles';

const switchToList = () => {
    Actions.replace('list');
};

export default class LoadingScreen extends Component {
    componentDidMount = () => {
        setTimeout( switchToList , 2000);
    };
    render() {
        return (
            <View style = { styles.container }>
                <StatusBar backgroundColor = { commonStyles.colors.primary }/>
                <Image source = { logoImg } style = { styles.logo } />
                <Text style = { styles.logoTitle }>Shopping List</Text>
            </View>
        );
    }
}