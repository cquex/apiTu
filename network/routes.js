const bodyParser = require("body-parser");
const cors = require("cors");
const passport = require("passport");

//rutas app
const persona = require("../api/components/persona/network");

const routes = (server) => {
    server.use(bodyParser.json());
    //server.use(passport.initialize());
    server.use(cors());
  server.use("/persona", persona);
};

module.exports = routes;
