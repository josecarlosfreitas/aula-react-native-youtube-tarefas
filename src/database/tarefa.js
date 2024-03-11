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
                console.log(_array);
                return onSuccess(_array);
            },
            (_, error) => {
                console.log(error);
            }
        );
    });

}

export function adicionarTarefa(descricao, lida) {
    db.transaction((tx) => {
        tx.executeSql(
            "create table if not exists tarefa (id integer primary key not null, descricao string, lida int);"
        );
    });

    db.transaction((tx) => {
        tx.executeSql("insert into tarefa (descricao, lida) values (?, ?)", [descricao, lida]);
    });
}