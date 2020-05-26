import React, { Component } from 'react';
import { 
    View, 
    Text, 
    Image,
    FlatList,
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

export default class Main extends Component {
    state = {
        showHome: true,
        categories: [
            {
                id: Math.random(),
                title: 'Comida',
                items: [
                    {
                        id: Math.random(),
                        isChecked: true,
                        desc: 'Item 1'
                    },
                    {
                        id: Math.random(),
                        isChecked: false,
                        desc: 'Item 2'
                    },
                ]
            },
            {
                id: Math.random(),
                title: 'Roupas',
                items: []
            },
            {
                id: Math.random(),
                title: 'Cozinha',
                items: [
                    {
                        id: Math.random(),
                        isChecked: true,
                        desc: 'BUJÃO DE GÁS CROMADO'
                    },
                    {
                        id: Math.random(),
                        isChecked: false,
                        desc: 'Item 2'
                    },
                ],
            },
        ]
    };

    //Funções Categoria


    //Funções Item

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
                <View style = { styles.categoryList }>
                    <FlatList data = { this.state.categories }
                        keyExtractor = { category => category.id }
                        renderItem = { (category) => {
                            return (
                                <Category { ...category.item }/>             
                            );
                        }}/>
                </View>
            </View>
        );
    }
};