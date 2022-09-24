const mysql = require('mysql');
const db = mysql.createConnection({
    host: 'localhost',
    user:'root',
    password:'0811',
    port:3306,
    database:'posts',
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

