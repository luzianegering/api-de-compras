const sqlite3 = require('sqlite3');
const path = require('path');
sqlite3.verbose();
const caminhoBd = path.resolve(__dirname, 'database.db')

const bd = new sqlite3.Database(caminhoBd);

const USUARIOS_SCHEMA = `
CREATE TABLE IF NOT EXISTS "Usuarios"(
    "id" INTEGER PRIMARY KEY AUTOINCREMENT, 
    "nome" VARCHAR(64),
    "apelido" varchar(64),
    "email" varchar(64) NOT NULL UNIQUE,
    "senha" varchar(64)
)`;



function criaTabelaDeUsuarios() {
    bd.run(USUARIOS_SCHEMA, (error) => {
        if (error) console.log("Erro ao criar tabela de Usuarios");
    });
}

function populaTabelaDeUsuarios() {
    bd.run(`
    INSERT OR IGNORE INTO Usuarios(nome, apelido, email, senha)
    VALUES("Luciano Mendes", "Luth", "luth@teste.com", "123456789")
    `)
}

bd.serialize(() => {

    criaTabelaDeUsuarios();
    populaTabelaDeUsuarios();
})
process.on('SIGINT', () =>
    db.close(() => {
        console.log(' BD encerrado!');
        process.exit(0);
    })
);
module.exports = bd;
