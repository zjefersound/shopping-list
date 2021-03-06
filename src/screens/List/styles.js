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
    },
    categoryList: {
        flex: 1,
    },
    buttonAddCategory: {
        backgroundColor: commonStyles.colors.primary,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    labelAddCategory: {
        fontFamily: commonStyles.fontFamily.roboto,
        fontSize: 18,
        color: commonStyles.colors.secondary,
        marginLeft: 10
    },
    indicateAddCategory: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingBottom: 30
    },
    indicateAddCategoryText: {
        fontFamily: commonStyles.fontFamily.robotoBold,
        width: '70%',
        fontSize: 20,
        marginVertical: 25,
        textAlign: 'center',
        color: commonStyles.colors.secondaryDark,
    }
});

export default styles;