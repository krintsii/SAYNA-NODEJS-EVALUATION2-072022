const connection = require('../../db/mysql')


module.exports = (app) => {
    app.get('/uxui', (req, res) => {
        // res.status(200).render('uxui')
        connection.query("SELECT * FROM Notice WHERE formation='uxui'", function (err, result, fields) {
            if (err) throw err;
            res.status(200).render('uxui', {notice: result})

        });
    })
}