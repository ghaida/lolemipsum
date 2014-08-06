// a bot that will reply to tweets with placeholder text
// thanks to Imogen Wentworth for the awesome tutorial at http://imogenation.net/building-a-node-js-twitter-bot/

var ntwitter = require("ntwitter");
var auth = require("./auth");
var lol = new ntwitter(auth);

// Get a random element from an array
function getRandIndex(array) {
  var index = Math.floor(array.length*Math.random());
  return array[index];
}
// get nope
function getNope() {
  nopes = [
  " Nope.",
  " I'll only reply to cat, bacon, hipster, space, yoga, swol, taco bell, and doge k.",
  " Busy now, bye!",
  " LOL as if.",
  " Maybe later.",
  " I don't feel like it. Come back later.",
  " Gah no.",
  " You can't make me.",
  " I said goodby, sir!",
  " zzzZZZzzzZZZZzzz",
  " zzz",
  " Sleeping, bye.",
  " I don't know that one, but how are you?",
  " Not sure what that is, but you're looking sharp today!",
  " You picked the ONE THING I don't know.",
  " Sigh.",
  " Nah.",
  " Don't feel like it. Tell me a joke instead.",
  " Ohai!",
  " I guess I could learn about that sometime."
  ];
  var nope = getRandIndex(nopes);
  return nope;
}

// get a catipsum
function getRandCatIpsum() {
  catipsums = [
  " Lick butt destroy couch, so kick up litter chase imaginary bugs chew foot sun bathe, for stare at ceiling. Intently sniff.",
  " Run in circles cat goes crazy, and i like big cats and i cannot lie bathe private parts with tongue then lick owner's face.",
  " Climb leg cat snacks, or lick butt climb leg, or stand in front of the computer screen destroy couch have secret plans.",
  " Stand in front of the computer screen run in circles kick up litter. Hunt anything that moves swat at dog, present belly.",
  " Stare at ceiling stand in front of the computer screen leave fur on owners clothes, so play time, rub face on everything.",
  " Nap all day swat at dog favor packaging over toy leave fur on owners clothes hunt anything that moves, climb leg scamper.",
  " Throw up on your pillow stare at ceiling cat goes crazy hopped up on catnip, cheeseburgers. Human slave food dispenser.",
  " Give attitude kick up litter flop over claw drapes, and throwup on your pillow, and stand in front of the computer screen.",
  " Inspect anything brought into the house chew foot, need to chase tail, and flop over, leave fur on owners clothes."
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

// get a hipsteripsum
function getRandHipsterIpsum() {
  hipsteripsums = [
  " Viral irony yr, chambray gastropub literally gentrify ugh Carles lo-fi. Carles banjo cliche, freegan gluten-free.",
  " Polaroid gastropub four loko Truffaut swag, pop-up raw denim 3 wolf moon sustainable mlkshk cardigan mixtape viral 90's.",
  " Put a bird on it semiotics distillery, ugh plaid blog polaroid drinking vinegar Blue Bottle Williamsburg photo booth.",
  " Etsy kogi fashion axe, 90's umami synth asymmetrical. IPhone selfies Brooklyn actually lomo. Portland freegan loko art.",
  " Typewriter chia chillwave kitsch, actually meh gluten-free fanny pack chambray raw denim. Kogi post-ironic food truck."
  ];
  var hipsteripsum = getRandIndex(hipsteripsums);
  return hipsteripsum;
}

// get a spaceipsum
function getRandSpaceIpsum() {
  spaceipsums = [
  " Here men from the planet Earth first set foot upon the Moon. July 1969. We came in peace for all mankind. Man must explore. ",
  " Houston, Tranquillity Base here. The Eagle has landed. That's one small step for [a] man, one giant leap for mankind.",
  " As we got further and further away, it [the Earth] diminished in size. Finally it shrank to the size of a marble.",
  " Space, the final frontier. These are the voyages of the Starship Enterprise. Its mission: to explore strange new worlds.",
  " Mankind, let us preserve and increase this beauty, and not destroy it! Houston, Tranquillity Base here. The Eagle has landed."
  ];
  var spaceipsum = getRandIndex(spaceipsums);
  return spaceipsum;
}

// get a yogaipsum
function getRandYogaIpsum() {
  yogaipsums = [
  " A thin, round flat bread. abhyantara an incarnation of god. bhujanga vedha chapatti chit kundalini garland pose.",
  " Agnistambhasana pose ashwini bund cock pose. easy breath energy center in the heart region, fourth of the seven chakras.",
  " Bhagvad gita brahmin collecting. contentment, one of the five niyamas, second of the eight stages of classic yoga.",
  " A breathing technique which produces a light sonorous sound. People living together, teaching or learning yogic tradition.",
  " A language used in of yoga, hinduism and buddhism, and an official languages of india, considered “historical”."
  ];
  var yogaipsum = getRandIndex(yogaipsums);
  return yogaipsum;
}

// get a bsniiipsum
function getRandBsniiIpsum() {
  bsniiipsums = [
  " B'snii chickabii d'sde chicka'shnii.",
  " B'snii chickabii d'sde. B'snii chickabii d'sde. B'snii chickabii, b'snii chicka'shnii. B'snii chickabna d'stamii.", // evil'snii >:)
  " Lorem ipsum dolor b'snii chickabii d'stamana chickabana d'stashnii.",
  " B'snii chickabii d'sde. B'snii chickabii d'sde. B'snii chickabii, b'snii chicka'shnii. B'snii chickabii d'sde.",
  " B'snii chickabii chicka'shnii!"
  ];
  var bsniiipsum = getRandIndex(bsniiipsums);
  return bsniiipsum;
}

// get a swolipsum
function getRandSwolIpsum() {
  swolipsums = [
  " Swol bouldering canyoning carabiner harness chalk bag. Five ten crash pad rope lead climber ascend sport climbing belay.",
  " Pole lumberjack chalk bag rope atc crash pad five ten harness ascend downclimb lead mountaineering, deep water soloing.",
  " Bouldering swol free solo lead climbing tree fall factor, parkour anchors indoor holds ice shoes chalk bag clif bar.",
  " Top roping crash pad jug pocket patagonia hiking spotting cliff. Altitude sickness atc belay carabiner hang-dogging.",
  " Crash pad belay crux deep water soloing. Dyno figure eight flute grigri crimp pocket, approach side pull slab wolf moon."
  ];
  var swolipsum = getRandIndex(swolipsums);
  return swolipsum;
}

// get a tacobellipsum
function getRandTacoBellIpsum() {
  tacobellipsums = [
  " Taco bell cantina power, taco. Breakfast burrito fourthmeal spicy fresco why pay more pico de gallo chicken bowl.",
  " A.M. Mountain dew toppings breakfast menu 350 calories. Grande scrambler cinnamon twists small price? Cheesy nachos.",
  " Cheesy gordita crunch 7-layer burrito brownie sandwich, nachos supreme. Nacho cheese doritos loco taco supreme soft taco.",
  " Double decker taco supreme cantina power burrito! Chalupa supreme caramel, fiesta taco salad mtn dew baja blast freeze.",
  " Crunchy taco supreme meximelt? Cheese roll-up chalupa supreme dr pepper vanilla float freeze. Fiesta taco salad churros."
  ];
  var tacobellipsum = getRandIndex(tacobellipsums);
  return tacobellipsum;
}

// get a dogeipsum
function getRandDogeIpsum() {
  dogeipsums = [
  " wow. many text. such HTML. very placeholder. lorem graphic.  very filler. lorem generator. so text. much generator.",
  " so typography. so filler. much generator. such generator. many github. many HTML. lorem ipsum. so text. such graphic.",
  " very graphic. very layout. so javascript. much dogescript. so doge. many HTML. lorem dogescript. lorem doge. lorem graphic.",
  " very graphic. very layout. so javascript. much dogescript. so doge. many HTML. lorem dogescript. lorem doge. lorem graphic.",
  " many HTML. many layout. very graphic. very typography. much text. much placeholder. very HTML. much github. wow."
  ];
  var dogeipsum = getRandIndex(dogeipsums);
  return dogeipsum;
}

// Log errors
var callback = function handleError(error) {
  if (error) {
    console.error("response status:", error.statusCode);
    console.error("data:", error.data);
  }
};

// Array to store streamed tweets
// var queue = [];
// Get a stream of Tweets
function startStreaming() {
  lol.stream("statuses/filter", { track: "@lolem_ipsum" }, function(stream) {
    console.log("Listening for Tweets...");
    stream.on("data", function(tweet) {
      // Check Tweet for specific matching phrases as Twitter's Streaming API doesn't allow for this
      if (tweet.text.match("cat")) {
        var catText = getRandCatIpsum();
        var catParams = {
          status: "@" + tweet.user.screen_name + catText,
          in_reply_to_status_id: tweet.id
        };
        console.log(tweet.text);
        lol.updateStatus(catParams, catParams, callback);
      } else if(tweet.text.match("bacon")) {
        var baconText = getRandBaconIpsum();
        var baconParams = {
          status: "@" + tweet.user.screen_name + baconText,
          in_reply_to_status_id: tweet.id
        };
        console.log(tweet.text);
        lol.updateStatus(baconParams, baconParams, callback);
      } else if(tweet.text.match("hipster")) {
        var hipsterText = getRandHipsterIpsum();
        var hipsterParams = {
          status: "@" + tweet.user.screen_name + hipsterText,
          in_reply_to_status_id: tweet.id
        };
        console.log(tweet.text);
        lol.updateStatus(hipsterParams, hipsterParams, callback);
      } else if(tweet.text.match("space")) {
        var spaceText = getRandSpaceIpsum();
        var spaceParams = {
          status: "@" + tweet.user.screen_name + spaceText,
          in_reply_to_status_id: tweet.id
        };
        console.log(tweet.text);
        lol.updateStatus(spaceParams, spaceParams, callback);
      } else if(tweet.text.match("yoga")) {
        var yogaText = getRandYogaIpsum();
        var yogaParams = {
          status: "@" + tweet.user.screen_name + yogaText,
          in_reply_to_status_id: tweet.id
        };
        console.log(tweet.text);
        lol.updateStatus(yogaParams, yogaParams, callback);
      } else if(tweet.text.match("b'snii")) {
        var bsniiText = getRandBsniiIpsum();
        var bsniiParams = {
          status: "@" + tweet.user.screen_name + bsniiText,
          in_reply_to_status_id: tweet.id
        };
        console.log(tweet.text);
        lol.updateStatus(bsniiParams, bsniiParams, callback);
      } else if(tweet.text.match("swol")) {
        var swolText = getRandSwolIpsum();
        var swolParams = {
          status: "@" + tweet.user.screen_name + swolText,
          in_reply_to_status_id: tweet.id
        };
        console.log(tweet.text);
        lol.updateStatus(swolParams, swolParams, callback);
      } else if(tweet.text.match("taco bell")) {
        var tacoBellText = getRandTacoBellIpsum();
        var tacoBellParams = {
          status: "@" + tweet.user.screen_name + tacoBellText,
          in_reply_to_status_id: tweet.id
        };
        console.log(tweet.text);
        lol.updateStatus(tacoBellParams, tacoBellParams, callback);
      } else if(tweet.text.match("doge")) {
        var dogeText = getRandDogeIpsum();
        var dogeParams = {
          status: "@" + tweet.user.screen_name + dogeText,
          in_reply_to_status_id: tweet.id
        };
        console.log(tweet.text);
        lol.updateStatus(dogeParams, dogeParams, callback);
      } else {
        var nopeText = getNope();
        var nopeParams = {
          status: "@" + tweet.user.screen_name + nopeText,
          in_reply_to_status_id: tweet.id
        };
        console.log(tweet.text);
        lol.updateStatus(nopeParams, nopeParams, callback);
      }
    });
  });
}

startStreaming();