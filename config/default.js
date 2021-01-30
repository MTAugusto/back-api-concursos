module.exports = {
	development: {
		host: "",
		redisdata: "",
		dialect: "",
		port: 0,
		password: "",
	},
	production: {
		host: "",
		redisdata: "",
		dialect: "",
		port: 0,
		password: "",
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
