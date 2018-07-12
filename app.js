const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const dotenv = require('dotenv'); dotenv.load();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.set('json spaces', 2);

app.get('/api/locations/', function (req, res) {
  const obj = {
    center: { lat: -33.40687286817432, lng: -70.57695351392255 },
    locations: [ 
      { lat: -33.399410028173335, lng: -70.56907854825482 },
      { lat: -33.40917791223983, lng: -70.56237686014657 },
      { lat: -33.415418706427985, lng: -70.5660311732583 },
      { lat: -33.40597326749488, lng: -70.54325580596924 },
      { lat: -33.39871950983149, lng: -70.56148705244118 },
      { lat: -33.37946296593501, lng: -70.55453942545887 } 
    ]
  }
  res.json(obj)
});

// Server static files from /browser
app.use(express.static(__dirname + '/dist'));

app.get('/*', function (req, res) {
  res.sendFile(__dirname + '/dist/index.html');
});

// Sets server port and logs message on success
let server = app.listen(process.env.PORT || 3000, function () {
  console.log('Listening on port %s', server.address().port);
});


