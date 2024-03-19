import React, { useEffect, useState } from 'react';
import { Modal, TextInput, Button, View, Pressable, Text } from 'react-native';
import { styles } from './styles';
import { adicionarTarefa, atualizarTarefa, excluirTarefa } from '../../database/tarefa';
import Toast from 'react-native-simple-toast';

const ModalTarefa = ({ isVisible, onClose, onSalvar, tarefa }) => {

    const [descricao, setDescricao] = useState('');

    useEffect(() => {
        setDescricao(tarefa?.descricao);
    }, [tarefa]);

    const onSalvarTarefa = () => {
        if(!descricao){
            Toast.show('Preencha a descrição!', Toast.SHORT);
            return;
        }

        if (tarefa) {
            atualizarTarefa(tarefa.id, descricao, 0, () => {
                setDescricao('');
                Toast.show('Tarefa atualizada!', Toast.SHORT);
                onSalvar();
                onClose();
            }, () => {
                Toast.show('Erro ao atualizar tarefa!');
            });
        } else {
            adicionarTarefa(descricao, 0, () => {
                setDescricao('');
                Toast.show('Tarefa criada!', Toast.SHORT);
                onSalvar();
                onClose();
            }, () => {
                Toast.show('Erro ao criar tarefa!');
            });
        }

    };

    const onExcluirTarefa = () => {
        excluirTarefa(tarefa.id, () => {
            setDescricao('');
            Toast.show('Tarefa excluida!', Toast.SHORT);
            onSalvar();
            onClose();
        }, () => {
            Toast.show('Erro ao excluir tarefa!');
        });
    };

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={isVisible}
            onRequestClose={onClose}>
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <View style={styles.modalHeader}>
                        <Text style={styles.titleHeader}>Salvar Tarefa</Text>
                        <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => onClose()}
                        >
                            <Text style={styles.textStyle}>Fechar</Text>
                        </Pressable>
                    </View>
                    <View style={styles.modalBody}>
                        <View style={styles.containerDescricao}>
                            <Text style={styles.titleDescricao}>Descrição:</Text>
                            <TextInput
                                style={styles.input}
                                value={descricao || ''}
                                onChangeText={setDescricao}
                            />
                        </View>
                        <View style={styles.containerBotaoSalvarRemover}>
                            <Button
                                onPress={onSalvarTarefa}
                                title={'Salvar'}
                            />
                            {tarefa && (
                                <Button
                                    onPress={onExcluirTarefa}
                                    title={'Excluir'}
                                />
                            )}
                        </View>
                    </View>
                </View>
            </View>
        </Modal>
    );
};

export default ModalTarefa;