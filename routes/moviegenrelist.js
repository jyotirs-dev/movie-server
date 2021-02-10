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
        let filteredData = parsedData.map(movie=> movie.genres);
        let genreArray = [...new Set([].concat(...filteredData))];
        res.send(genreArray);
      });
});

module.exports = router;
