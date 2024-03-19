import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fafafa',
        justifyContent: 'center',
        marginBottom: 20,
        borderBottomWidth: 0.5,
        borderBottomColor: '#DADADA'
    },
    list: {
        marginStart: 14,
        marginEnd: 14,
        marginTop: 5,
    },
    header: {
        alignItems: 'center',
        marginTop: 50,
        marginBottom: 20
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 22,
    },
    content: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 2,
        marginBottom: 18,
    },
    descricao: {
        fontWeight: 'bold',
        fontSize: 16,
    },
    iconEditar: {
        marginRight: 10
    }
});