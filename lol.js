// a bot that will reply to tweets with placeholder text
// thanks to Imogen Wentworth for the awesome tutorial at http://imogenation.net/building-a-node-js-twitter-bot/

var ntwitter = require('ntwitter');
var auth = require('./auth');
var lol = new ntwitter(auth);

// use unholy sorcery to get a random number from 1 to 10
function getRandNum() {
  var number = Math.floor((Math.random()*10)+1);
  return number;
}

// Get a random element from an array
function getRandIndex(array) {
  var index = Math.floor(array.length*Math.random());
  return array[index];
}
// get a catipsum
function getRandCatIpsum() {
  catipsums = [
  'Lick butt destroy couch, so kick up litter chase imaginary bugs chew foot sun bathe, for stare at ceiling. Cheeseburgers.1',
  'Lick butt destroy couch, so kick up litter chase imaginary bugs chew foot sun bathe, for stare at ceiling. Cheeseburgers.2',
  'Lick butt destroy couch, so kick up litter chase imaginary bugs chew foot sun bathe, for stare at ceiling. Cheeseburgers.3',
  'Lick butt destroy couch, so kick up litter chase imaginary bugs chew foot sun bathe, for stare at ceiling. Cheeseburgers.4',
  'Lick butt destroy couch, so kick up litter chase imaginary bugs chew foot sun bathe, for stare at ceiling. Cheeseburgers.5',
  'Lick butt destroy couch, so kick up litter chase imaginary bugs chew foot sun bathe, for stare at ceiling. Cheeseburgers.6',
  'Lick butt destroy couch, so kick up litter chase imaginary bugs chew foot sun bathe, for stare at ceiling. Cheeseburgers.7',
  'Lick butt destroy couch, so kick up litter chase imaginary bugs chew foot sun bathe, for stare at ceiling. Cheeseburgers.8',
  'Lick butt destroy couch, so kick up litter chase imaginary bugs chew foot sun bathe, for stare at ceiling. Cheeseburgers.9',
  'Lick butt destroy couch, so kick up litter chase imaginary bugs chew foot sun bathe, for stare at ceiling. Cheeseburgers.10'
  ];
  var catipsum = getRandIndex(catipsums);
  return catipsum;
}

// Log errors
var callback = function handleError(error) {
  if (error) {
    console.error('response status:', error.statusCode);
    console.error('data:', error.data);
  }
};

// Array to store streamed tweets
var queue = [];
// Get a stream of Tweets
function startStreaming() {
  lol.stream('statuses/filter', { track: '@lolem_ipsum' }, function(stream) {
    console.log('Listening for Tweets...');
    stream.on('data', function(tweet) {
      // Check Tweet for specific matching phrases as Twitter's Streaming API doesn't allow for this
      if (tweet.text.match('gimme cat text')) {
        var number = getRandNum();
        var catText = getRandCatIpsum();
        var catParams = {
          status: '@' + tweet.user.screen_name + catText,
          in_reply_to_status_id: tweet.id
        };
        console.log(tweet.text);
        bot.updateStatus(catParams, callback);
      }
    });
  });
}

startStreaming();