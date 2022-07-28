const connection = require('../../db/mysql')



module.exports = (app) => {
    app.get('/frontend', (req, res) => {
        connection.query("SELECT * FROM Notice WHERE formation='frontend'", function (err, result, fields) {
            if (err) throw err;
            res.status(200).render('frontend', {notice: result})

        });
    })
}