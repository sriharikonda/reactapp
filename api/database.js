const {Client} = require ('pg')

const client = new Client ({
    host: "localhost",
    port: 5432,
    user: "postgres",
    password: "1234",
    database: "empdata1"
});

module.exports = client