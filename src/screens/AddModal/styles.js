import { StyleSheet } from 'react-native';
import commonStyles from '../../commonStyles';

const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0, 0.6)',
    },
    container: {
        backgroundColor: commonStyles.colors.secondary,
    },
    header: {
        backgroundColor: commonStyles.colors.brown,
        height: 70,
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerTitle: {
        fontFamily: commonStyles.fontFamily.roboto,
        fontSize: 26,
        color: commonStyles.colors.secondary,
    },
    body: {
        padding: 25,
    },  
    inputText: {
        borderRadius: 30,
        height: 60,
        backgroundColor: commonStyles.colors.secondaryMiddle,


        paddingLeft: 30,
        paddingRight: 20,
        color: commonStyles.colors.brown,
        fontSize: 20,
    },
    buttonsBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 25,
    },
    buttonCancel: {
        flex: 1,
        height: 50,
        borderRadius: 25,
        backgroundColor: commonStyles.colors.secondaryDark,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonCancelLabel: {
        color: commonStyles.colors.brown,
        fontFamily: commonStyles.fontFamily.roboto,
        fontSize: 18,
    },
    buttonSave: {
        marginLeft: 25,
        flex: 1,
        height: 50,
        borderRadius: 25,
        backgroundColor: commonStyles.colors.primary,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonSaveLabel: {
        color: commonStyles.colors.secondary,
        fontFamily: commonStyles.fontFamily.robotoBold,
        fontSize: 18,
    },
});

export default styles;