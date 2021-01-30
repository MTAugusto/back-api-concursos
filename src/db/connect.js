const redis = require("redis");

const env = process.env.NODE_ENV || "development";
const dbredisport = require("../../config/config")[env];

exports.db = redis.createClient({
	port: dbredisport.port,
	host: dbredisport.host,
	password: dbredisport.password,
});
