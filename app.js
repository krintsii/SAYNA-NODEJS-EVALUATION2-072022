require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const mysql = require('mysql')
const connection = require('./src/db/mysql')
const PORT = 4000
const app = express()

// console.log(process.env);




app.set('view engine', 'ejs')
app.set('views', 'src/public/page' )

app
    .use(express.static('src/public/page'))
    .use(bodyParser.json())
    .use(express.urlencoded({extended:true}))



//les different routes des pages
require('./src/Routes/pages/pageAcceuil') (app)
require('./src/Routes/pages/backend')(app)
require('./src/Routes/pages/frontend')(app)
require('./src/Routes/pages/uxui')(app)
require('./src/Routes/pages/marketing')(app)
require('./src/Routes/pages/contact')(app)
require('./src/Routes/pages/signup')(app)

//les routes des api
require('./src/Routes/api/pageAccueil')(app)
require('./src/Routes/api/backend')(app)
require('./src/Routes/api/frontend')(app)
require('./src/Routes/api/marketing')(app)
require('./src/Routes/api/uxui')(app)
require('./src/Routes/api/contact')(app)






//debut de serveur
app.listen(PORT, console.log(`http://localhost:${PORT}`))