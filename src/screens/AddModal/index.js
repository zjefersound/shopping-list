import React, { Component } from 'react';
import { 
    Alert,
    Modal, 
    View, 
    Text,
    TextInput,
    TouchableOpacity,
    TouchableWithoutFeedback,
} from 'react-native';

//estilos e imagens
import styles from './styles';

const initialState = {
    title: '',
    placeholder: '',
    value: '',
    category_id: '',

};
export default class AddModal extends Component {
    state = {
        ...initialState
    }
    //funções 
    save = () => {
        if( this.state.value == '') {
            Alert.alert('Dados inválidos','Corrija os dados e tente novamente');
            return;
        }
        try {
            //Deve ter como fazer sem determinar a categoria
            this.props.onSave( this.state.value, this.props.category_id || null);
            this.props.onCancel();
            this.setState({ ...initialState });
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
                        <TextInput placeholder = { this.props.placeholder } 
                            style = { styles.inputText } 
                            value = { this.state.value }
                            onChangeText = { value => this.setState({ value }) }/>  
                        <View style = { styles.buttonsBar }>
                            <TouchableOpacity style = { styles.buttonCancel } 
                                activeOpacity = {0.7}
                                onPress = { this.props.onCancel }>
                                <Text style = { styles.buttonCancelLabel }>
                                    Cancelar</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style = { styles.buttonSave } 
                                activeOpacity = {0.7}
                                onPress = { this.save }>
                                <Text style = { styles.buttonSaveLabel }>
                                    Salvar</Text>
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