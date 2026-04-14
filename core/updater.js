const fs = require('fs');
const https = require('https');

const UPDATE_URL = "https://buildnow.gg/api/version.json";

async function checkForUpdates() {
  return new Promise((resolve, reject) => {
    https.get(UPDATE_URL, res => {
      let data = "";
      res.on("data", chunk => data += chunk);
      res.on("end", () => {
        const latest = JSON.parse(data);
        const current = JSON.parse(fs.readFileSync("./config.json")).version;

        resolve({ updateAvailable: latest.version !== current, latest });
      });
    }).on("error", reject);
  });
}

module.exports = { checkForUpdates };
