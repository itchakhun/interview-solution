const https = require('https');

const API_URL = 'https://codequiz.azurewebsites.net/';

function main() {
  const fundCode = process.argv[2]
  if (!fundCode) {
    throw(new Error(`Missing FUNDCODE. Please call as following "node ./index.js FUNDCODE"`))
  };
  https.get(API_URL, {
    headers: {
      'Cookie': 'hasCookie=true',
    }
  }, res => {
    res.on('data', (chunk) => {
      const htmlString = Buffer.from(chunk).toString();
      const data = htmlString.match(new RegExp(fundCode + '.+?([0-9.]+)'))
      if (Array.isArray(data)) {
        console.log(data[1])
      } else {
        console.log(data)
      }
    })
  })
}

main();