var fs = require("fs");

fs.writeFile('output.txt', "Second write yo!", function(err){
    if(err){
        console.log(err);
    }
    fs.readFile('output.txt', function(err, data){
        console.log("1. InnerData: " + data);
    });
});

fs.readFile('output.txt', function(err, data){
    console.log("2. OutterData: " + data);
})
