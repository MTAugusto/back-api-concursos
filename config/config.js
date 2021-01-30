module.exports = {
	development: {
		host: "localhost",
		redisdata: "listconcursos",
		port: 6379,

	},
	production: {
		host: process.env.HOST_REDIS,
		redisdata: process.env.REDIS_DATABASE,
		port: process.env.PORT_REDIS,
		password: process.env.PASSWORD_REDIS,
	},
	server: {
		development: {
			port: process.env.PORT || 9000,
		},
		production: {
			port: process.env.PORT || 7000,
		},
	},
};
