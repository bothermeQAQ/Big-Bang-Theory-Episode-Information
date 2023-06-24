const bbt = require('big-bang-theory');

const episodeSeason = (req, res) => {
  function sortSeason(episode){
    return episode.season.toString() === req.params.season.toString();
  }
  res.status(200).json({
    success: true,
    season: req.params.season,
    data: bbt._embedded.episodes.filter(sortSeason),
  })
}

module.exports = episodeSeason;
