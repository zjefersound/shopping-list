import { StyleSheet, Platform } from 'react-native';
import commonStyles from '../../commonStyles';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: commonStyles.colors.secondary,
    },
    navBar: {
        flexDirection: 'row',
        height: Platform.OS === 'ios' ? 110 : 80,
        backgroundColor: commonStyles.colors.primary, 
        paddingTop: Platform.OS === 'ios' ? 30 : 0,
    },
    navLeft: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    navLogo: {
        marginLeft: 30,
        height: 30,
        width: 30,
    },
    navTitle: {
        marginLeft: 15,
        fontFamily: commonStyles.fontFamily.ropaSans,
        fontSize: 25,
        color: commonStyles.colors.secondary,
    },
    navDelete: {
        marginRight: 15,
        paddingHorizontal: 15,
        justifyContent: 'center',
    }
});

export default styles;