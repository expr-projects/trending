// config/auth.js

module.exports =
{

    'facebookAuth' : {
        'clientID'        : '1504997639830767', // your App ID
        'clientSecret'    : 'b34e8877cc055233409d4c94596b1f5b', // your App Secret
        'callbackURL'     : 'http://localhost:8080/auth/facebook/callback'
    },

    'twitterAuth' : {
        'consumerKey'        : 'KmSPiBXatzAIscUJbdYD2XhxV',
        'consumerSecret'     : '2X0iHNKAzQ5cTZFhYsdlkMXveuqZSOeXu3IKOjatcgzYlN7T1H',
        'callbackURL'        : 'http://localhost:8080/auth/twitter/callback'
    },

    'googleAuth' : {
        'clientID'         : '632639167210-vc6rqgbdn7jlmulbth909c3uooghdcka.apps.googleusercontent.com',
        'clientSecret'     : 'iIGyI0o0O86Y4qySc9VcrHAY',
        'callbackURL'      : 'http://localhost:8080/oauth2/callback'
    }

} ||
 {

    'facebookAuth' : {
        'clientID'        : '840615919378962', // your App ID
        'clientSecret'    : '43dbc5a94cd87168d05ee5440b24640c', // your App Secret
        'callbackURL'     : 'https://everyday-trending.herokuapp.com/auth/callback'
    },

    'twitterAuth' : {
        'consumerKey'        : 'KmSPiBXatzAIscUJbdYD2XhxV',
        'consumerSecret'     : '2X0iHNKAzQ5cTZFhYsdlkMXveuqZSOeXu3IKOjatcgzYlN7T1H',
        'callbackURL'        : 'https://everyday-trending.herokuapp.com/auth/twitter/callback'
    },

    'googleAuth' : {
        'clientID'         : '632639167210-fsvm20k0f00inlimbfienoenbdci42f0.apps.googleusercontent.com',
        'clientSecret'     : 'MOVM2Cps7uzWIWmqYfww8EqF',
        'callbackURL'      : 'https://everyday-trending.herokuapp.com/oauth2/callback'
    }

};
