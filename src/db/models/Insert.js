const { db } = require("../connect");

exports.InsertConcursos = (attribute, json) => {
	db.set(attribute, JSON.stringify(json));
};
