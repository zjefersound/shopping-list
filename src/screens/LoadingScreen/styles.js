import { StyleSheet } from 'react-native';
import commonStyles from '../../commonStyles';

const styles = StyleSheet.create({
    container: { 
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: commonStyles.colors.primary,
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
});

export default styles;