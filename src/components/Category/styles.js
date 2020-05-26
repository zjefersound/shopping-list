import { StyleSheet } from 'react-native';
import commonStyles from '../../commonStyles';

const styles = StyleSheet.create({
    container: {
        marginTop: 30,
        backgroundColor: commonStyles.colors.secondaryDark,
        marginHorizontal: 20,
    },
    header: {
        flexDirection: 'row',
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
    }
});

export default styles;