const express = require("express");
const GetCepController = require("./controllers/GetCepController")

const routes = express.Router();

routes.get("/getCep/:cep/", GetCepController.index);

module.exports = routes;