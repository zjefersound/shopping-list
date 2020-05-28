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
        showItems: true,
    };
    
    //Provavelmente tem um jeito melhor de fazer 
    onDeleteItem = item_id => {
        const items = [ ...this.state.items ].filter(item => item.id !== item_id );
        this.setState({ items });
        this.props.onDeleteItem(this.props.id, item_id);
    }
    render(){
        const containerStyle = this.props.first ? 
            [styles.container,{ marginTop: 30 }] : styles.container;
        return(
            <View style = { containerStyle }>
                <View style = { styles.header }>
                    <View style = { styles.left }>
                        <TouchableOpacity activeOpacity = {0.7}
                            style = { styles.buttonShow }
                            onPress = { () => this.setState({ showItems: !this.state.showItems }) }>
                            { getShowItems(this.state.showItems) }
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
                <FlatList data = { this.state.showItems ? this.state.items : null } 
                    keyExtractor = { item => `${item.id}` }
                    renderItem = { ({ item }) => {
                        return(
                            <Item { ...item } categoryId = { this.props.id }
                                onToggleCheckItem = { this.props.onToggleCheckItem } 
                                onDeleteItem = { this.onDeleteItem } />
                        );
                    } }/>
            </View>
        );
    }
}; 
function getShowItems( visibility ){
    if ( visibility ){
        return (
            <Icon name = 'angle-up' size = {30}
                color = { commonStyles.colors.brown }/>
        );
    }else{
        return (
            <Icon name = 'angle-down' size = {30}
                color = { commonStyles.colors.brown }/>
        );
    }
}