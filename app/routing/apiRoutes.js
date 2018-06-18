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
    var userScore = userData.scores;

    console.log(userScore);

    var totalDiff = 0 ;

    // loop through friends
    for(var i = 0; i < friends.length; i++) {
        console.log(friends[i]);
        totalDiff = 0;

        // loop through scores of each friend
        for(var j = 0; j < friends[i].scores[j]; j++) {

            // calculate diff and sum the difference
            totalDiff += Math.abs(parseInt(userScore[j]) - parseInt(friends[i].scores[j]));

            if(totalDiff <= bestMatch.friendDiff) {

                // reset bestMatch to new friend
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
