
const connection = require('../../db/mysql')



module.exports = (app) => {
    app.get('/home', (req, res) => {

        connection.query("SELECT * FROM Notice", function (err, result, fields) {
            if (err) throw err;
            // console.log(result);
            res.status(200).render('index', {notice: result})



        });



    })

}

