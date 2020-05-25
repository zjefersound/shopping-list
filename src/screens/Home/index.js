import React from 'react';
import { 
    Modal, 
    View, 
    Text, 
    Image, 
    ImageBackground,
    TouchableOpacity, 
} from 'react-native';

//estilos e imagens
import styles from './styles';
import backgroundImg from '../../../assets/images/home.jpg';
import logoImg from '../../../assets/images/icon.png';

export default props => {
    return(
        <Modal visible = { props.isVisible } 
            transparent = { true }
            animationType = 'none'
            onRequestClose = { props.onCancel }>
            <ImageBackground source = { backgroundImg } style = { styles.container }> 
                <View style = { styles.content }>
                    <Image source = { logoImg } style = { styles.logo } />
                    <Text style = { styles.logoTitle }>Shopping List</Text>
                    <TouchableOpacity activeOpacity = { 0.7 }
                        onPress = { props.onCancel }>
                        <Text style = { styles.buttonStart }>+ Criar lista</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </Modal>
    );
};