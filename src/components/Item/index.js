import React from 'react';
import { 
    View, 
    Text, 
    Platform,
    TouchableOpacity,
    TouchableWithoutFeedback,
} from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';


//estilos e imagens
import styles from './styles';
import commonStyles from '../../commonStyles';
import Icon from 'react-native-vector-icons/FontAwesome';

//funcionalidades

export default props => {

    const getRightRender = ( id ) => {
        return (
            <TouchableOpacity style = { styles.buttonDelete }
                activeOpacity = {0.7}
                onPress = { props.onDelete }>
                <Icon name = 'trash' size = {25}
                    color = { commonStyles.colors.secondary }/>
            </TouchableOpacity>
        );
    }

    return (
        <Swipeable overshootRight = { false } 
            renderRightActions = { () => getRightRender( props.id ) }>
            <View style = { styles.container }>
                <TouchableWithoutFeedback onPress = { props.onToggleCheck }>
                    <View style = { styles.checkContainer }>
                        { getCheckView(props.isChecked) }
                    </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback>
                    <Text style = { styles.desc }>{ props.desc }</Text>
                </TouchableWithoutFeedback>
            </View>
        </Swipeable>
    );
};

function getCheckView( isChecked ) {
    if ( isChecked ){
        return(
            <View style = { styles.done }>
                <Icon name = 'check' size = {15} 
                    color = { commonStyles.colors.secondary }/>
            </View>
        );
    }else {
        return(
            <View style = { styles.pending }>
                
            </View>
        );
    }
}