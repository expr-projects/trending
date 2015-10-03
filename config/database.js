module.exports = {
	'url'	: process.env.MONGOHQ_URL
					|| process.env.MONGOLAB_URI
					||'mongodb://localhost/appdb'
					||'mongodb://poonia:poonia@ds051738.mongolab.com:51738/trendingdb'


}
