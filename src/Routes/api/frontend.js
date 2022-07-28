const connection = require('../../db/mysql')

module.exports = (app) => {
    app.get('/api/frontend', (req, res) => {
        connection.query("SELECT * FROM Notice WHERE formation='frontend'" , function (err, result, fields) {
            if (err) throw err;
            // console.log(result);
            const message = 'voici tous les avis de frontend'
            res.status(200).json({message, data:result})
          });
    })
}