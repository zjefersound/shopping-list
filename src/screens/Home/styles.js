import { StyleSheet } from 'react-native';
import commonStyles from '../../commonStyles';

const styles = StyleSheet.create({
    container: { 
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    content: {
        alignItems: 'center'
    },
    logo: {
        height: 135,
        width: 135,
    },
    logoTitle: {
        marginTop: 20,
        fontFamily: commonStyles.fontFamily.ropaSans,
        fontSize: 35,
        color: commonStyles.colors.secondary
    },
    buttonStart: {
        backgroundColor: commonStyles.colors.secondary,
        fontSize: 20,
        color: commonStyles.colors.brown,
        height: 60,
        paddingHorizontal: 45,
        borderRadius: 30,
        marginTop: 35,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        color: commonStyles.colors.brown,
    }

});

export default styles;