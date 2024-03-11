import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginBottom: 20,
        borderBottomWidth: 0.5,
        borderBottomColor: '#DADADA'
    },
    content: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 2,
        marginBottom: 8,
    },
    descricao: {
        fontWeight: 'bold',
        fontSize: 16,
    }
});