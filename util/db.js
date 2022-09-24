const mysql = require('mysql');
const db = mysql.createConnection({
    host: 'sql.freedb.tech',
    user:'freedb_vitordbdb',
    password:'XV%eA2CXAh4*%Vz',
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

