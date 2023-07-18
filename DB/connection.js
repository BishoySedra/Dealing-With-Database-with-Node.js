import mySQL from 'mysql2'

const connection = mySQL.createConnection({
    host: "localhost",
    user: "root",
    password: "Bishoy@123",
    database: "Task_2"
});

export default connection;