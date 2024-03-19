import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    modalView: {
        backgroundColor: "white",
        borderRadius: 20,
        padding: 10,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        height: 260,
        width: 300,
    },
    modalHeader: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        borderBottomWidth: 0.5,
        borderBottomColor: '#DADADA'
    },
    titleHeader: {
        fontWeight: 'bold',
        marginLeft: 30,
        marginTop: 10,
        fontSize: 17,
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
        marginBottom: 5,
    },
    buttonOpen: {
        backgroundColor: "#F194FF",
    },
    buttonClose: {
        backgroundColor: "#2196F3",
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    },
    modalBody: {
        flex: 1,
        //backgroundColor: 'green',
    },
    containerDescricao: {
        width: 290,
        alignItems: 'flex-start',
        margin: 15
    },
    input: {
        width: '90%',
        height: 40,
        borderColor: '#ccc',
        borderStyle: 'solid',
        borderWidth: 1,
        borderRadius: 10,
        alignSelf: 'center',
        padding: 10,
        marginBottom: 15,
        backgroundColor: 'white'
    },
    titleDescricao: {
        fontWeight: '500',
        marginLeft: 12,
        marginBottom: 5,
        marginTop: 5,
    },
    containerBotaoSalvarRemover: {
        flexDirection: 'row', 
        justifyContent: 'space-between',
        marginLeft: 28,
        marginRight: 28
    }
});