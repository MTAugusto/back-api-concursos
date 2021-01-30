const db = require("../db/models/GetAll");

const env = process.env.NODE_ENV || "development";
const dbredis = require("../../config/config")[env].redisdata;
const getConcursos = require("../routine/genereteDataConcursos");

const GetListConcursos = {

	v1: async (req, res) => {
		try {
			const listConcursos = await db.GetConcursos(dbredis);

			if (listConcursos) {
				res.send(listConcursos);
			} else {
				await getConcursos.GetListConcursos();
				const concursos = await db.GetConcursos(dbredis);
				res.send(concursos);
			}
		} catch (error) {
			res.status(500).send({
				message: error,
			});
		}
	},
};

exports.GetListConcursos = GetListConcursos;
