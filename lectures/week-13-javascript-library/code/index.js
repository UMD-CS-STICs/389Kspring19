const express = require('express');
const app = express();
const exphbs = require('express-handlebars');
const moment = require('moment');
const faker = require('faker');

app.engine('handlebars', exphbs({ defaultLayout: 'main', partialsDir: "views/partials/" }));
app.set('view engine', 'handlebars');
app.use('/public', express.static('public'));

function generateFakeData(){
  let arr = [];

  for(let i = 0; i < 50; i++){
    arr.push({
      name: faker.name.findName(),
      img: faker.image.avatar,
      company: faker.company.companyName,
      phrase: faker.company.catchPhrase
    });
  }

  return arr;
}

app.get('/', function(req, res){
  res.render('faker', {data: generateFakeData(), time: moment.utc().format()});
});

// 1.) Use faker.js to generate your own fake data and display it to the user.
// 2.) Use moment.js to generate a timestamp for when a request to this endpoint was
// made and place it at the top of page. This timestamp should be formatted differently
// than the timestamp created in the '/' endpoint.
// -- Use different fake data than what was given.
app.get('/myfaker', function(req, res){
  res.render('myfaker', {});
});

app.get('/moment/add', function(req, res){
  var days = req.query.days;
  if(!days){
    return res.send('Please send a number of days');
  }
  return res.send(moment().add(parseInt(days), 'days').format('MMM Do, YYYY'));
});

app.get('/moment/subtract', function(req, res){
  var days = req.query.days;
  if(!days){
    return res.send('Please send a number of days');
  }
  return res.send(moment().subtract(parseInt(days), 'days').format('MMM Do, YYYY'));
});

app.listen(3000, function(){
  console.log('Listening on port 3000');
});
