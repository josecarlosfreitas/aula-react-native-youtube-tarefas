import { Text, TouchableOpacity, View } from "react-native";

import { styles } from "../../pages/Home/styles";

export default function ListaTarefa({ data, onPress }) {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <View style={styles.content}>
                <Text style={styles.descricao}>{data.descricao}</Text>
            </View>
        </TouchableOpacity>
    );
};