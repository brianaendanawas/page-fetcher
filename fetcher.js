const fs = require('fs')
const request = require('request');

let input = process.argv.slice(2);

let url = input[0];
let path = input[1];

request(url, (error, response, body) => {
  if (error === null && response.statusCode === 200) { // checking to make sure there are no errors
    fs.writeFile(path, body, err => {
      if (err) {
        console.error("File path invalid. Error: " + err);
        return;
      } else {
        console.log(`Downloaded and saved ${fs.statSync(path).size} bytes to ${path}`);
      }
    });
  } else {
    console.log("URL error or non-200 result.");
  }
});