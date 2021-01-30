const cron = require("node-cron");
const generateConcursos = require("./genereteDataConcursos");

const env = process.env.NODE_ENV || "development";

cron.schedule("* * 1 * *", () => {
	if (env !== "development") { generateConcursos.GetListConcursos.v1(); }
});
