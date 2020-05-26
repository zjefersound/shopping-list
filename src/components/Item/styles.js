import { StyleSheet } from 'react-native';
import commonStyles from '../../commonStyles';

const styles = StyleSheet.create({
    container: {
        backgroundColor: commonStyles.colors.secondaryMiddle,
        borderBottomColor: commonStyles.colors.secondaryDark,
        borderBottomWidth: 1,
        flexDirection: 'row',
        height: 60,
        alignItems: 'center'
    },
    checkContainer: {
        width: 60,
        alignItems: 'center'
    },
    done: {
        backgroundColor: commonStyles.colors.green,
        height: 30,
        width: 30,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
    },
    pending: {
        backgroundColor: commonStyles.colors.primaryDark,
        height: 30,
        width: 30,
        borderRadius: 15,
    },
    desc: {
        fontFamily: commonStyles.fontFamily.roboto,
        color: commonStyles.colors.brown,
    },
    buttonDelete: {
        backgroundColor: '#CC6F77',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 15,
    }
});

export default styles;