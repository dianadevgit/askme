const sqlite3 = require("sqlite3");
const { open } = require("sqlite"); //open database conexion

module.exports = () =>
    open({
        filename: './src/db/askme.sqlite',
        driver: sqlite3.Database,
    });