import React from 'react';
import { 
    Modal, 
    View, 
    Text,
    TextInput,
    TouchableOpacity,
    TouchableWithoutFeedback,
} from 'react-native';

//estilos e imagens
import styles from './styles';

export default props => {

    return(
        <Modal transparent = { true } animationType = 'fade'
            visible = { props.isVisible } onRequestClose = { props.onCancel }>
            <TouchableWithoutFeedback onPress = { props.onCancel }>
                <View style = { styles.background }/>
            </TouchableWithoutFeedback>

            <View style = { styles.container }>
                <View style = { styles.header }>
                    <Text style = { styles.headerTitle }>
                        { props.title }</Text>
                </View>
                <View style = { styles.body }>
                    <TextInput placeholder = { props.placeholder } 
                        style = { styles.inputText } 
                        value = { props.value }
                        onChangeText = { props.onChangeText }/>  
                    <View style = { styles.buttonsBar }>
                        <TouchableOpacity style = { styles.buttonCancel } 
                            activeOpacity = {0.7}
                            onPress = { props.onCancel }>
                            <Text style = { styles.buttonCancelLabel }>
                                Cancelar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style = { styles.buttonSave } 
                            activeOpacity = {0.7}
                            onPress = { () => props.onSave( props.value ) }>
                            <Text style = { styles.buttonSaveLabel }>
                                Salvar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

            <TouchableWithoutFeedback onPress = { props.onCancel }>
                <View style = { styles.background }/>
            </TouchableWithoutFeedback>
        </Modal>
    );
}