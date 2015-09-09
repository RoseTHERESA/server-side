var request = require('request');


var url = process.argv[2];

request(url, function (error, response, body) {
  if (error) {

    console.log("Error!  Request failed - " + error);
  } else if (!error && response.statusCode === 200) {
    console.log(body);
  }
});