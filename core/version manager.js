const fs = require('fs');
const path = require('path');

const versionsDir = path.join(__dirname, '../versions');

function getVersions() {
  return fs.readdirSync(versionsDir);
}

function setActiveVersion(version) {
  fs.writeFileSync('./config.json', JSON.stringify({ activeVersion: version }, null, 2));
}

module.exports = { getVersions, setActiveVersion };
