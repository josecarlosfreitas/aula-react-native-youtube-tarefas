import { openDatabase } from './database';

const db = openDatabase();

export function listarTarefas(onSuccess) {
    db.transaction((tx) => {
        tx.executeSql(
            "create table if not exists tarefa (id integer primary key not null, descricao string, lida int);"
        );
    });

    db.transaction((tx) => {
        tx.executeSql(
            "select * from tarefa order by descricao",
            [],
            (_, { rows: { _array } }) => {
                return onSuccess(_array);
            },
            (_, error) => {
                console.log(error);
            }
        );
    });

}

export function adicionarTarefa(descricao, lida, onSuccess, onError) {
    db.transaction((tx) => {
        tx.executeSql("insert into tarefa (descricao, lida) values (?, ?)",
            [descricao, lida],
            (_, { rows: { _array } }) => {
                return onSuccess(_array);
            },
            (_, error) => {
                return onError(error);
            }
        );
    });
}

export function atualizarTarefa(id, descricao, lida, onSuccess, onError) {
    db.transaction((tx) => {
        tx.executeSql("update tarefa set descricao = ?, lida = ? where id = ?",
            [descricao, lida, id],
            (_, { rows: { _array } }) => {
                return onSuccess(_array);
            },
            (_, error) => {
                return onError(error);
            }
        );
    });
}

export function excluirTarefa(id, onSuccess, onError) {
    db.transaction((tx) => {
        tx.executeSql("delete from tarefa where id = ?",
            [id],
            (_, { rows: { _array } }) => {
                return onSuccess(_array);
            },
            (_, error) => {
                return onError(error);
            }
        );
    });
}


