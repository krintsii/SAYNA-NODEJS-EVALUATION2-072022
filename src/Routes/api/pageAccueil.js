const connection = require('../../db/mysql')

module.exports = (app) => {
    app.get('/api/home', (req, res) => {
        connection.query("SELECT * FROM Notice", function (err, result, fields) {
            if (err) throw err;
            // console.log(result);
            const message = 'voici tous les avis'
            res.status(200).json({message, data:result})
            console.log(result);
          });
    })
}