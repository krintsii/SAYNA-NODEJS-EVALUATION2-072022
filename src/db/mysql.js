var mysql = require('mysql');

const connection = mysql.createConnection({
      host: process.env.MYSQLHOST,
      user: process.env.MYSQLUSER,
      password: process.env.MYSQLPASS,
      port:process.env.MYSQLPORT,
      database:process.env.MYSQLDATABASE
});


connection.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
});


module.exports = connection;