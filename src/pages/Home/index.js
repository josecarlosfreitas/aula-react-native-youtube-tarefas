import { FlatList, Text, View } from "react-native";
import ListaTarefa from "../../components/ListaTarefa";
import { adicionarTarefa, listarTarefas } from "../../database/tarefa";
import { useEffect, useState } from "react";
import { styles } from "./styles";

export default function Home() {

    const [tarefas, setTarefas] = useState([]);

    useEffect(() => {
        carregarListaTarefas();
    }, []);

    const carregarListaTarefas = () => {
        adicionarTarefa('comprar material escolar', 0);
        adicionarTarefa('comprar racao cachorro', 0);
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
                renderItem={({ item }) => <ListaTarefa data={item} />}
            />
        </View>
    );
}