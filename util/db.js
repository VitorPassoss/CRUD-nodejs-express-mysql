const mysql = require('mysql');
const db = mysql.createConnection({
    host: 'sql.freedb.tech',
    user:'freedb_freedb_vitordbdb',
    password:'W6EcV9ycC4#2!r?',
    port:3306,
    database:'freedb_postsdb',
    multipleStatements: true
});
db.connect((erro) => {
    if(erro){
        throw erro
    }else{
        console.log(`conectado ao banco de dados filmes db`)
    }
    
   
});
global.db = db;
module.exports = db;

