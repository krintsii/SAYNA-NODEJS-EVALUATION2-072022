const connection = require('../../db/mysql')

module.exports = (app) => {
    app.get('/api/backend', (req, res) => {
        connection.query("SELECT * FROM Notice WHERE formation='backend'" , function (err, result, fields) {
            if (err) throw err;
            // console.log(result);
            const message = 'voici tous les avis de backend'
            res.status(200).json({message, data:result})
          });
    })
}