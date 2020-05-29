import { StyleSheet } from 'react-native';
import commonStyles from '../../commonStyles';

const styles = StyleSheet.create({
    container: {
        marginBottom: 30,
        marginHorizontal: 20,
    },
    header: {
        flexDirection: 'row',
        backgroundColor: commonStyles.colors.secondaryDark,
        height: 65,
    },
    left: { 
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
    },  
    buttonShow: {
        padding: 20,
    }, 
    title: {
        color: commonStyles.colors.brown,
        fontFamily: commonStyles.fontFamily.roboto,
        fontSize: 22,
    },
    right: {
        justifyContent: 'center',
    },
    buttonAdd: {
        padding: 20,
    },
    delete: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
});

export default styles;