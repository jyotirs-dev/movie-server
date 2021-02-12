var express = require('express');
let router = express.Router({ mergeParams : true });
var fs = require('fs');
// variables
const dataPath = './data/movie.json';
const originalData = fs.readFileSync(dataPath)

/* Update movie listing. */
router.put('/', function(req, res, next) {
    let parsedData = JSON.parse(originalData);
    let editedData= JSON.parse(req.body.data);
    let moviearr =[]
    moviearr.push(editedData);
    const updatedData = parsedData.map(obj=>moviearr.find(o => o.id===obj.id) || obj);
    const jsonString = JSON.stringify(updatedData)

    fs.writeFile(dataPath, jsonString, err => {
        if (err) {
            console.log('Error writing file', err)
        } else {
            console.log('Successfully wrote file')
            res.send(jsonString);
        }
    })
    
});

module.exports = router;
