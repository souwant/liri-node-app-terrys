
//Brings NODE packages in
require("dotenv").config();
const Spotify = require('node-spotify-api');
const fs = require('fs');
const axios = require('axios');

//Imports Key files form keys.js
const keys =  require('./keys.js');

//Configures spotify-lets spotify know who you are
const spotify = new Spotify(keys.spotify);

//Takes command from command and assigns to variable
const liriCommand = process.argv[2];
const liriVal =  process.argv[3];



if (liriCommand === 'spotify-this-song'){
    //Search spotify for the specific artist, tracks, albums
    spotify.search({ 
        type: 'track', //takes in 'track' or artist
        query: liriVal }, //track names or artist name
        function(err, data) {
        if (err) {
          return console.log('Error occurred: ' + err);
        }
       
      console.log(JSON.stringify(data, null, 2)); 
      });
    
} else if (liriCommand === 'concert-this'){
    //Get request from bandsintown API
    axios.get("https://rest.bandsintown.com/artists/" + liriVal + "/events?app_id=codingbootcamp")
    .then(res => {
       console.log(res.data)
    })
    .catch(err => console.log (err));

} else if (liriCommand === 'movie-this'){
    //Get request from OMDB API
    axios.get("http://www.omdbapi.com/?apikey=trilogy&s="+ liriVal)
    .then(res => {
       console.log(res.data)
    })
    .catch(err => console.log (err));


} else if (liriCommand === 'do-what-it-says'){
    fs.readFile('random.txt', 'utf8', function (error, data){
        console.log(data.split('\r\n'))
        arrData.forEach(item => {
            
        });
    });

} else{
    console.log('Please enter correct command')
}


