module.exports = {
	'url'	: process.env.MONGOHQ_URL
					|| process.env.MONGOLAB_URI
					||'mongodb://localhost/trendingdb'
					||'mongodb://poonia:poonia@ds051738.mongolab.com:51738/trendingdb'
					//9379876460

}
