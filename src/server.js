require("dotenv").config()
require("./database")

const express = require("express");
var cors = require('cors')
const routes = require("./routes");
const app = express();

app.use(cors())
app.use(express.json());
app.use(routes);

app.listen(3333, () => console.log("Server running port 3333"));