import React, { Component } from 'react';
import { 
    View, 
    Text, 
    Image,
    TouchableOpacity,
    StatusBar, 
} from 'react-native';

//estilos e imagens
import styles from './styles';
import commonStyles from '../../commonStyles';
import Icon from 'react-native-vector-icons/FontAwesome';
import logoImg from '../../../assets/images/icon.png';

//componentes e telas
import Home from '../Home';
import Category from '../../components/Category';
import { FlatList } from 'react-native-gesture-handler';

export default class Main extends Component {
    state = {
        showHome: false,
    };

    render(){
        return (
            <View style = { styles.container }>
                <StatusBar backgroundColor = { commonStyles.colors.primary }/>
                <Home isVisible = { this.state.showHome } 
                    onCancel = { () => this.setState({ showHome: false }) }/>
                <View style = { styles.navBar }>
                    <View style = { styles.navLeft}>
                        <Image source = { logoImg } style = { styles.navLogo } />
                        <Text style = { styles.navTitle }>Sua Lista</Text>
                    </View>
                    <TouchableOpacity style = { styles.navDelete }>
                        <Icon name='trash' size = {30} 
                            color = { commonStyles.colors.secondary } />
                    </TouchableOpacity>
                </View>
                <Category title='Comida' />
                <Category title='Limpeza' />
                <Category title='Roupas' />
                <Category title='Papelaria' />
            </View>
        );
    }
};