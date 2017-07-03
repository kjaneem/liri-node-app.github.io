
        var Twitter = require('twitter');
        
        var keys = require("./keys.js");
        console.log(keys.twitterKeys.consumer_key);
        console.log(keys.twitterKeys.consumer_secret);
        console.log(keys.twitterKeys.access_token_key);
        console.log(keys.twitterKeys.access_token_secret);

        //This will show your last 20 tweets and when they were created at in your terminal/bash window
        var twitterUser = new Twitter({
        consumer_key: 'keys.twitterKeys.consumer_key',
        consumer_secret: 'keys.twitterKeys.consumer_secret',
        access_token_key: 'keys.twitterKeys.access_token_key',
        access_token_secret: 'keys.twitterKeys.access_token_secret'
        }); //end twitterUser object create
        
// exporting the twitterUser constructor which we will use in liri.js
module.exports = twitterUser;

