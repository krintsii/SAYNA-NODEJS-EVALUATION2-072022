const connection = require('../../db/mysql')


module.exports = (app) => {
    app.get('/backend', (req, res) => {
        connection.query("SELECT * FROM Notice WHERE formation='backend'", function (err, result, fields) {
            if (err) throw err;
            // console.log(result);
            res.status(200).render('backend', {notice: result})


        });
    })
}