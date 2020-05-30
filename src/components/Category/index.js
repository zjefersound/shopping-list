import React, { useState }from 'react';
import { 
    View, 
    FlatList, 
    Text, 
    TouchableOpacity,
} from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';

//estilos e imagens
import styles from './styles';
import commonStyles from '../../commonStyles';
import Icon from 'react-native-vector-icons/FontAwesome5';

//componentes
import Item from '../Item';

export default props => {

    const [showItems, setShowItems] = useState(true);

    const getShowItems = visibility => {
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
    };
    //Delete category container
    const getLeftContent = () => {
        return (
            <View style = { styles.delete }>
                <Icon name = 'trash' size = {35} color = '#CC6F7788' />
            </View>
        );
    }
    const renderItem = ({ item }) => {
        return(
            <Item { ...item } categoryId = { props.id }
                onToggleCheckItem = { props.onToggleCheckItem } 
                onDeleteItem = { onDeleteItem } />
        );
    };
    const onDeleteItem = item_id => {
        props.onDeleteItem(props.id, item_id);
    }

    const containerStyle = props.first ? 
        [styles.container,{ marginTop: 30 }] : styles.container;
    return(
        
        <View style = { containerStyle }>
            <Swipeable renderLeftActions = { getLeftContent }
                onSwipeableLeftOpen = { () => props.onDeleteCategory(props.id) }>
                <View style = { styles.header }>
                    <View style = { styles.left }>
                        <TouchableOpacity activeOpacity = {0.7}
                            style = { styles.buttonShow }
                            onPress = { () => 
                                setShowItems( !showItems ) }>
                            { getShowItems(showItems) }
                        </TouchableOpacity>
                        <Text style = { styles.title }>
                            { props.title }</Text> 
                    </View> 
                    <View style = { styles.right }>
                        <TouchableOpacity activeOpacity = {0.7}
                            style = { styles.buttonAdd }
                            onPress = { () => props.onAddItem(props.id) }>
                            <Icon name = 'plus' size = {30} 
                                color = { commonStyles.colors.brown }/>
                        </TouchableOpacity>
                    </View>
                </View>  
                <FlatList data = { showItems ? props.items : null } 
                    keyExtractor = { item => `${item.id}` }
                    renderItem = { renderItem }/>
            </Swipeable>
        </View>
    );
}; 