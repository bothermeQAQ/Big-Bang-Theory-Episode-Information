const bbt = require('big-bang-theory');

const episodeSpecificEpisode = (req, res) => {
  function sortSeason(episode){
    return episode.season == req.params.season;
  }
  function sortSpecificEpisode(episode){
    return episode.number == req.params.number;
  }
  res.status(200).json({
    success: true,
    season: req.params.season,
    number: req.params.number,
    data: bbt._embedded.episodes.filter(sortSeason).filter(sortSpecificEpisode),
  })
}

module.exports = episodeSpecificEpisode;
