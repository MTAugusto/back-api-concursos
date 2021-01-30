const { db } = require("../connect");

exports.GetConcursos = (attribute) => new Promise((resolve, reject) => {
	try {
		db.get(attribute, (erro, reply) => {
			if (reply) {
				resolve(reply);
			}
			if (erro) {
				throw erro;
			}

			resolve("Nenhum valor localizado");
		});
	} catch (error) {
		reject(error);
	}
});
