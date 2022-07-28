const connection = require('../../db/mysql')

module.exports = (app) => {
    app.get('/api/marketing', (req, res) => {
        connection.query("SELECT * FROM Notice WHERE formation='marketing'" , function (err, result, fields) {
            if (err) throw err;
            // console.log(result);
            const message = 'voici tous les avis de marketing'
            res.status(200).json({message, data:result})
          });
    })
}