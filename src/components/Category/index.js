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

export default class Category extends Component {
    state = {

    }
    render(){
        return(
            <View style = { styles.container }>
                <View style = { styles.header }>
                    <View style = { styles.left }>
                        <TouchableOpacity activeOpacity = {0.7}
                            style = { styles.buttonShow }
                            onPress = { this.props.onShow }>
                            <Icon name = 'angle-down' size = {30}
                                color = { commonStyles.colors.secondary }/>
                        </TouchableOpacity>
                        <Text style = { styles.title }>{ this.props.title }</Text> 
                    </View> 
                    <View style = { styles.right }>
                        <TouchableOpacity activeOpacity = {0.7}
                            style = { styles.buttonAdd }
                            onPress = { this.props.onAdd }>
                            <Icon name = 'plus' size = {30} 
                                color = { commonStyles.colors.secondary }/>
                        </TouchableOpacity>
                    </View>
                </View>  

            </View>
        );
    }
}; 