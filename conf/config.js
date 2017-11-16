module.exports = {
	origin: ['http://localhost:8088',],

	sqlHost: 'localhost',
	sqlUser: 'root',
	sqlPassword: '123456',
	sqlDatabase: 'ccmain',
	connectionLimit: 20,

	port: 8081,

	staticSources: '/staticSources',	// 静态资源地址头

	log4j: {
		appenders: {
			console: {
				type: 'console',
				layout: {
					type: 'userLog',
					separator: ';'
				}
			},
			file: {
				type: 'file',
				filename: './logs/all-the-logs.log',
				maxLogSize: 1024 * 1024,
				layout: {
					type: 'userLog',
					separator: ';'
				}
			},
			sql: {
				type: 'file',
				filename: './logs/sql.log',
				maxLogSize: 1024 * 1024,
				layout: {
					type: 'sqlLog',
					separator: ';'
				}
			},
		},
		categories: {
			default: { appenders: [ 'file', 'console' ], level: 'INFO' },
			sql: { appenders: [ 'sql' ], level: 'INFO' },
		},
	},
}