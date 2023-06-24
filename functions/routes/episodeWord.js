const bbt = require("big-bang-theory");

const episodeWord = (req, res) => {
  function sortTitle(episode){
    return episode.name.toLowerCase().includes(req.params.word.toLowerCase());
  }
  res.status(200).json({
    success: true,
    
    word: req.params.word,
    data: bbt._embedded.episodes.filter(sortTitle),
  })
}

module.exports = episodeWord;
