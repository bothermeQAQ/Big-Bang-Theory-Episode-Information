const bbt = require("big-bang-theory");

const episodeDescription = (req, res) => {
  function sortDescription(episode){
    return episode.summary.toLowerCase().includes(req.params.description.toLowerCase());
  }
  res.status(200).json({
    success: true,
    
    description: req.params.summary,
    data: bbt._embedded.episodes.filter(sortDescription),
  })
}

module.exports = episodeDescription;
