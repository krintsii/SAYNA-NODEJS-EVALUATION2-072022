const connection = require('../../db/mysql')


module.exports = (app) => {
    app.get('/marketing', (req, res) => {
        // res.status(200).render('marketing')
        connection.query("SELECT * FROM Notice WHERE formation='marketing'", function (err, result, fields) {
            if (err) throw err;
            res.status(200).render('marketing', {notice: result})

        });
    })
}