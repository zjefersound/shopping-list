import React, { Component } from 'react';
import { 
    Alert,
    Modal, 
    View, 
    Text,
    TouchableOpacity,
    TouchableWithoutFeedback,
} from 'react-native';

//estilos e imagens
import styles from './styles';


export default class AlertModal extends Component {
    state = {
        
    }
    //funções 
    confirm = () => {
        try {
            this.props.onConfirm();
            this.props.onCancel();
        } catch (error) {
            Alert.alert('Erro ao salvar!', `${error}`);
        }

    };
    
    render(){
        return(
            <Modal transparent = { true } animationType = 'fade'
                visible = { this.props.isVisible } onRequestClose = { this.props.onCancel }>
                <TouchableWithoutFeedback onPress = { this.props.onCancel }>
                    <View style = { styles.background }/>
                </TouchableWithoutFeedback>
    
                <View style = { styles.container }>
                    <View style = { styles.header }>
                        <Text style = { styles.headerTitle }>
                            { this.props.title }</Text>
                    </View>
                    <View style = { styles.body }>  
                        <Text style = { styles.description }>{ this.props.description }</Text>
                        <View style = { styles.buttonsBar }>
                            <TouchableOpacity style = { styles.buttonCancel } 
                                activeOpacity = {0.7}
                                onPress = { this.props.onCancel }>
                                <Text style = { styles.buttonCancelLabel }>
                                    Cancelar</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style = { styles.buttonConfirm } 
                                activeOpacity = {0.7}
                                onPress = { this.confirm }>
                                <Text style = { styles.buttonConfirmLabel }>
                                    
                                    Ok</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
    
                <TouchableWithoutFeedback onPress = { this.props.onCancel }>
                    <View style = { styles.background }/>
                </TouchableWithoutFeedback>
            </Modal>
        );
    }
}