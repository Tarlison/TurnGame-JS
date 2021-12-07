require('./config/database')
const cors = require('cors')
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const routes = require('./routes/api');
let port = 3333;

app.use(cors({credentials: true, origin: '*'}))
app.use(function (req, res, next){
    res.header('Access-Control-Allow-Origin','*'); 
    res.header('Access-Control-Allow-Headers','Origin, X-Requested-With, Content-Type, Accept, x-access-token');
    res.header('Access-Control-Allow-Methods','GET, POST, PUT, DELETE, OPTIONS');
    next();
})

app.use(bodyParser.json());
app.use('/api', routes);

app.listen(process.env.port || port, ()=> {
    console.log('Servidor em execução na porta '+port);
})



