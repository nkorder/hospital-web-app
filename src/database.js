const{
    createPool
} = require('mysql');

const pool = createPool({
    host: "localhost",
    user: "root",
    password: "root",
    database: "db_ciudades",
    connectionLimit: 10
})

pool.query("select * from ciudad", (err, result, fields)=>{
    if(err){
        return console.log(err);
    }
    return console.log(result);
})