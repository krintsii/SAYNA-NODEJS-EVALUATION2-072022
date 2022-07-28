const connection = require('../../db/mysql')

module.exports = (app) => {
    app.post('/api/newNotice', (req, res) => {
        const data = req.body
        connection.query("INSERT INTO Notice SET ?",data, function (err, result, fields) {
            if (err) throw err;
            // console.log(result);
            const message = `l'avis de ${req.body.LastName} a ete envoyer sur le domaine de ${req.body.formation}`
            res.status(200).json({message, data:data})
            // console.log(result);
          });
    })
}