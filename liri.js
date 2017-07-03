//write the code you need to grab the data from keys.js. Then store the keys in a variable
//var keys = require("./keys.js");
        // console.log(keys.twitterKeys.consumer_key);
        // console.log(keys.twitterKeys.consumer_secret);
        // console.log(keys.twitterKeys.access_token_key);
        // console.log(keys.twitterKeys.access_token_secret);

//Make it so liri.js can take in one of the following commands:
//  - my-tweets
//  - spotify-this-song
//  - movie-this
//  - do-what-it-says

var inquirer = require("inquirer");
//console.log(inquirer);

var comPrompt = {
    type: "list",
    message: "\n\nSelect one of the following:",
    choices: ["my-tweets", "spotify-this-song", "movie-this", "do-what-it-says"],
    name: "comPrompt"
};

inquirer.prompt([
    comPrompt,
  ])
  .then(function (inquirerResponse) {

    // console.log("Prompt response was: " + inquirerResponse.comPrompt);
 
      switch(inquirerResponse.comPrompt) {

            //my-tweets
            case "my-tweets":
                showTweets();
                break;

            //spotify-this-song
            case "spotify-this-song":
                spotifySong();
                break;

            //movie-this
            case "movie-this":
                movieThis();
                break;

            //do-what-it-says
            case "do-what-it-says":
                doWhatItSays();
                break;

            default:
                console.log("ERROR: Please select from the list of choices.");
                break;

      }  //end switch-case
            
      function showTweets() {
        console.log("user selected 'my-tweets'")
        
        //This will show your last 20 tweets and when they were created at in your terminal/bash window
        var twitterUser = require("./createTwitterUser.js");

        twitterUser.get('search/tweets', {q: 'ice cream'}, function(error, tweets, response) {
        console.log(tweets);
        });

        // twitterUser.get('statuses/user_timeline', {screen_name: 'KarenMyucf', count: '2'}, function(error, tweets, response) {
        // if(error) throw error;
        // console.log(tweets);  // The favorites. 
        // console.log(response);  // Raw response object. 
        // }); 

      }

      function spotifySong() {
          console.log("user selected 'spotify-this-song'")

            //This will show the following information about the song in your terminal/bash window
            // - Artist(s)
            // - The song's name
            // - A preview link of the song from Spotify
            // - The album that the song is from
            //If no song is provided then your program will default to "The Sign" by Ace of Base
      }

      function movieThis() {
          console.log("user selected 'movie-this'")

            //You'll use the request package to retrieve data from the OMDB API. 
            //Like all of the in-class activities, the OMDB API requires an API key. 
            //You may use 40e9cece
            //This will output the following information to your terminal/bash window:
            //  * Title of the movie.
            //  * Year the movie came out.
            //  * IMDB Rating of the movie.
            //  * Rotten Tomatoes Rating of the movie.
            //  * Country where the movie was produced.
            //  * Language of the movie.
            //  * Plot of the movie.
            //  * Actors in the movie.
             //If the user doesn't type a movie in, the program will output data for the movie 'Mr. Nobody.'

      }

      function doWhatItSays() {
          console.log("user selected 'do-what-it-says'")

        //Using the fs Node package, 
        //LIRI will take the text inside of random.txt and then 
        //use it to call one of LIRI's commands.
        //It should run spotify-this-song for "I Want it That Way," as follows the text in random.txt.
        //Feel free to change the text in that document to test out the feature for other commands
        
      }

  }); // end inquirer-response

