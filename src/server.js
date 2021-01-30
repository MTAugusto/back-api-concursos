/* eslint-disable no-console */
const http = require("http");
const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
require("./routine/cron");

const env = process.env.NODE_ENV || "development";
const { port } = require("../config/config").server[env];

const controllerGetListConcursos = require("./controllers/Concursos");

const app = express();
const server = http.createServer(app);

app.use(helmet());
app.use(cors());

app.get("/api/concursos", controllerGetListConcursos.GetListConcursos.v1);

server.listen(port, () => {
	console.log("--------------------------------------");
	console.log("Servidor online!");
	console.log(`Executando no endereço: http://localhost:${port}`);
	console.log("--------------------------------------");
});
