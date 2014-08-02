// a bot that will reply to tweets with placeholder text
// thanks to Imogen Wentworth for the awesome tutorial at http://imogenation.net/building-a-node-js-twitter-bot/

var ntwitter = require('ntwitter');
var auth = require('./auth');
var lol = new ntwitter(auth);

// use unholy sorcery to get a random number from 1 to 10
function getRandNum() {
  var number = Math.floor((Math.random()*5)+1);
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
  " Lick butt destroy couch, so kick up litter chase imaginary bugs chew foot sun bathe, for stare at ceiling. Intently sniff.",
  " Run in circles cat goes crazy, and i like big cats and i cannot lie bathe private parts with tongue then lick owner's face.",
  " Climb leg cat snacks, or lick butt climb leg, or stand in front of the computer screen destroy couch have secret plans.",
  " Stand in front of the computer screen run in circles kick up litter. Hunt anything that moves swat at dog, present belly.",
  " Stare at ceiling stand in front of the computer screen leave fur on owners clothes, so play time, rub face on everything."
  ];
  var catipsum = getRandIndex(catipsums);
  return catipsum;
}

// get a baconipsum
function getRandBaconIpsum() {
  baconipsums = [
  " Bacon ipsum dolor sit amet pork loin pork t-bone swine cow corned beef tongue spare ribs ground round. Meatloaf, leberkas.",
  " Pork loin ham pig meatloaf sirloin biltong jowl kevin. Pastrami jerky andouille ham, ball tip rump salami venison chuck.",
  " Pastrami corned beef boudin tenderloin. Ground round pork loin,  spare ribs andouille beef. Turkey spare ribs pork chop.",
  " Spare ribs. Tenderloin prosciutto turducken, andouille biltong ground round. Bacon drumstick sausage hamburger beef ribs.",
  " Pork loin swine leberkas ham hock, drumstick strip steak capicola pork chop beef ribs. Bresaola pork loin meatloaf, jerky."
  ];
  var baconipsum = getRandIndex(baconipsums);
  return baconipsum;
}

// Log errors
var callback = function handleError(error) {
  if (error) {
    console.error('response status:', error.statusCode);
    console.error('data:', error.data);
  }
};

// Array to store streamed tweets
// var queue = [];
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
        lol.updateStatus(catParams, catParams, callback);
      }
      if (tweet.text.match('gimme bacon text')) {
        var number = getRandNum();
        var baconText = getRandBaconIpsum();
        var baconParams = {
          status: '@' + tweet.user.screen_name + baconText,
          in_reply_to_status_id: tweet.id
        };
        console.log(tweet.text);
        lol.updateStatus(baconParams, baconParams, callback);
      }
    });
  });
}

startStreaming();