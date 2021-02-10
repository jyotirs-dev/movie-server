var express = require('express');
let router = express.Router({ mergeParams : true });
var fs = require('fs');
// variables
const dataPath = './data/movie.json';

/* GET movie listing. */
router.get('/', function(req, res, next) {
    fs.readFile(dataPath, 'utf8', (err, data) => {
        if (err) {
          throw err;
        }
        let parsedData= JSON.parse(data);
        let filteredData= parsedData.filter(movie=> movie.genres.includes(req.params.genre));
        
        res.send(filteredData);
      });
});

module.exports = router;
