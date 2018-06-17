var bands = require("../data/bands.js");

module.exports = function(app) {
  app.get("/api/bands", function(req, res) {
    res.json(bands);
  });

  app.post("/api/bands", function(req, res) {
    var bestMatch = {
      name: "",
      photo: "",
      bandDiff: 1000
    };
    console.log(req.body);

    //parse user's POST
    var userData = req.body;
    var userScore = userData.score;

    console.log(userScore);

    var totalDiff = 0 ;

    // loop through bands
    for(var i = 0; i < bands.length; i++) {
        console.log(bands[i]);
        totalDiff = 0;

        // loop through scores of each band
        for(var j = 0; j < bands[i].score[j]; j++) {

            // calculate diff and sum the difference
            totalDiff += math.abs(parseInt(userScore[j]) - pareseInt(bands[i].score[j]));

            if(totalDiff <= bestMatch.friendDiff) {

                // reset bestMatch to new band
                bestMatch.name = bands[i].name;
                bestMatch.photo = bands[i].photo;
                bestMatch.bandDiff = totalDiff;
            }
        }
    }

    // save data to database
    bands.push(userData);

    // return a json with user's bestMatch
    res.json(bestMatch);
  });
};
