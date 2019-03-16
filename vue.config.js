module.exports = {
	devServer : {
		proxy : {
			'/jersey' : {
				target : 'http://localhost:8090',
				changeOrigin : true,
				ws : true,
				pathRewrite : {
					'^/jersey' : 'jersey'
				}
			}
		}
	}
}