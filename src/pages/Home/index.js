import { FlatList,Text, View } from "react-native";
import ListaTarefa from "../../components/ListaTarefa";
import { listarTarefas } from "../../database/tarefa";
import { useEffect, useState } from "react";
import { styles } from "./styles";
import BotaoCadastrar from "../../components/BotaoCadastrar";
import ModalTarefa from "../ModalCadastroTarefa";

export default function Home() {

    const [tarefas, setTarefas] = useState([]);
    const [tarefaEmEdicao, setTarefaEmEdicao] = useState(undefined);

    //modal
    const [isModalVisible, setIsModalVisible] = useState(false);

    const handleOpenModal = () => {
        setTarefaEmEdicao(undefined);
        setIsModalVisible(true);
    };

    const handleCloseModal = () => {
        setIsModalVisible(false);
    };

    const handleSalvarTarefa = () => {
        handleCloseModal();
        carregarListaTarefas();
    };

    const onPressTarefa = (tarefa) => {
        setTarefaEmEdicao(tarefa);
        setIsModalVisible(true);
    };

    useEffect(() => {
        carregarListaTarefas();
    }, []);

    const carregarListaTarefas = () => {
        listarTarefas((array) => {
            setTarefas(array);
        });
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Lista de Tarefas</Text>
            </View>
            <FlatList
                style={styles.list}
                data={tarefas}
                keyExtractor={(item) => String(item.id)}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => <ListaTarefa data={item} onPress={() => onPressTarefa(item)} />}
            />
            <BotaoCadastrar onPress={handleOpenModal} />
            <ModalTarefa
                isVisible={isModalVisible}
                onClose={handleCloseModal}
                onSalvar={handleSalvarTarefa}
                tarefa={tarefaEmEdicao}
            />
        </View>
    );
}