const episodeIndex = require('./routes/episodeIndex');
const router = require("express").Router();
const episodes = require("./routes/episodes");
const episodeWord = require('./routes/episodeWord');
const episodeDescription = require('./routes/episodeDescription');
const episodeSeason = require('./routes/episodeSeason');
const episodeSpecificEpisode = require('./routes/episodeSpecificEpisode');

router.get("/episodes", episodes);
router.get("/episode-index/:index", episodeIndex);
router.get("/episode-word/:word", episodeWord);
router.get("/episode-description/:description", episodeDescription);
router.get("/episode-season/:season", episodeSeason);
router.get("/episode-specific/:season/:number",episodeSpecificEpisode);

module.exports = router;