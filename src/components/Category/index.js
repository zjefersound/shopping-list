import React, { Component } from 'react';
import { 
    View, 
    FlatList, 
    Text, 
    TouchableOpacity,
} from 'react-native';

//estilos e imagens
import styles from './styles';
import commonStyles from '../../commonStyles';
import Icon from 'react-native-vector-icons/FontAwesome5';

//componentes
import Item from '../Item';

export default class Category extends Component {
    state = {
        items: [...this.props.items],
        itemsVisible: []
    };

    render(){
        return(
            <View style = { styles.container }>
                <View style = { styles.header }>
                    <View style = { styles.left }>
                        <TouchableOpacity activeOpacity = {0.7}
                            style = { styles.buttonShow }
                            onPress = { this.props.onShow }>
                            <Icon name = 'angle-down' size = {30}
                                color = { commonStyles.colors.brown }/>
                        </TouchableOpacity>
                        <Text style = { styles.title }>{ this.props.title }</Text> 
                    </View> 
                    <View style = { styles.right }>
                        <TouchableOpacity activeOpacity = {0.7}
                            style = { styles.buttonAdd }
                            onPress = { this.props.onAdd }>
                            <Icon name = 'plus' size = {30} 
                                color = { commonStyles.colors.brown }/>
                        </TouchableOpacity>
                    </View>
                </View>  
                <FlatList data = { this.state.items } 
                    keyExtractor = { item => `${item.id}` }
                    renderItem = { ({ item }) => {
                        return(
                            <Item { ...item } />
                        );
                    } }/>
            </View>
        );
    }
}; 