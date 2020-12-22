const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors');

// se crea el router 
const router = require('../network/routes');

//se importa el mysql

require("../store/mysql");

const app = express();

//se definen los middlewares y rutas
router(app);

app.set("AppName", "TU API Cquex");
app.set("port", process.env.API_PORT || "3100");

app.use(bodyParser.json());
app.use('/app', express.static('public'));
app.use(cors());

//start server
//aca se hara un listen de un puerto especifico, que es el port del app defnido arriba
app.listen(app.get("port"), () => {
  console.log(app.get("AppName"), app.get("port"));
  console.log("Servidor en linea!");
});
