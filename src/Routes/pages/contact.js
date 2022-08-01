const connection = require('../../db/mysql')

module.exports = (app) => {
    app.get('/contact', (req, res) => {
        res.status(200).render('contact')
        
    })

    // cette methode est pour que n'utilise pas de methde fetch 
    // app.post('/contact', (req, res)=> {
    //     const data = req.body
    //     connection.query("INSERT INTO Notice SET ?;", data, function (err, result, fields) {
    //         if (err) throw err;
    //         else {
                
    //             // console.log(result);
    //             res.render('contact')
    //         }
    //     });
    // })
}