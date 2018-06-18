var friends = require("../data/friends");

module.exports = function(app) {
  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });

  app.post("/api/friends", function(req, res) {
    var bestMatch = {
      name: "",
      photo: "",
      friendDiff: 1000
    };
    console.log(req.body);

    //parse user's POST
    var userData = req.body;
    var userScore = userData.score;

    console.log(userScore);

    var totalDiff = 0 ;

    // loop through bands
    for(var i = 0; i < friends.length; i++) {
        console.log(friends[i]);
        totalDiff = 0;

        // loop through scores of each band
        for(var j = 0; j < friends[i].score[j]; j++) {

            // calculate diff and sum the difference
            totalDiff += math.abs(parseInt(userScore[j]) - pareseInt(friends[i].score[j]));

            if(totalDiff <= bestMatch.friendDiff) {

                // reset bestMatch to new band
                bestMatch.name = friends[i].name;
                bestMatch.photo = friends[i].photo;
                bestMatch.friendDiff = totalDiff;
            }
        }
    }

    // save data to database
    friends.push(userData);

    // return a json with user's bestMatch
    res.json(bestMatch);
  });
};
