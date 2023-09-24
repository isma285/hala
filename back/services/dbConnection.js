import mysql from "mysql2/promise";

const dbConnection = await mysql.createConnection({
    host: "localhost",
    database: "hala",
    user: "root",
    password: "isma",
    namedPlaceholders: true,
});

export default dbConnection;