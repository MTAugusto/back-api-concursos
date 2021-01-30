const puppeteer = require("puppeteer");
const db = require("../db/models/Insert");

const env = process.env.NODE_ENV || "development";
const dbredis = require("../../config/config")[env].redisdata;

const GetConcursosInEditalConcursos = require("../services/getInEditalConcursos");
const GetConcursosInConcursosNoBrasil = require("../services/getInConcursosNoBrasil");
const GetConcursosInJCConcursos = require("../services/getInJCConcursos");
const GetConcursosInPCIConcursos = require("../services/getInPCIConcursos");
const GetConcursosInNoticiaConcursos = require("../services/getInNoticiasConcursos");
const GetConcursosInEstrategiaConcursos = require("../services/getInEstrategiaConcursos");
const GetConcursosInGranConcursos = require("../services/getInGranConcursos");
const GetConcursosInAcheConcursos = require("../services/getInAcheConcursos");

const chromeOptions = {
	headless: true,
	defaultViewport: null,
	args: [
		"--incognito",
		"--no-sandbox",
		"--single-process",
		"--no-zygote",
	],
};

const GetListConcursos = {
	v1: async () => {
		try {
			const browser = await puppeteer.launch(chromeOptions);

			Promise.all([

				GetConcursosInEditalConcursos.GetConcursos(browser).then((values) => values),

				GetConcursosInConcursosNoBrasil.GetConcursos(browser).then((values) => values),

				GetConcursosInJCConcursos.GetConcurso(browser).then((values) => values),

				GetConcursosInPCIConcursos.GetConcurso(browser).then((values) => values),

				GetConcursosInNoticiaConcursos.GetConcurso(browser).then((values) => values),

				GetConcursosInEstrategiaConcursos.GetConcurso(browser).then((values) => values),

				GetConcursosInGranConcursos.GetConcurso(browser).then((values) => values),

				GetConcursosInAcheConcursos.GetConcursos(browser).then((values) => values),

			]).then((listConcursos) => {
				browser.close();

				const newArrayOfConcursos = [];
				listConcursos.forEach((concursos) => {
					if (concursos) { newArrayOfConcursos.push(...concursos); }
				});

				db.InsertConcursos(dbredis, newArrayOfConcursos);
			}).catch((error) => {
				throw error;
			});
		} catch (error) {
			console.log("throw generate", error);
		}
	},
};

exports.GetListConcursos = GetListConcursos;
