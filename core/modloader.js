const fs = require('fs');
const path = require('path');

const modsDir = path.join(__dirname, '../mods');

function loadMods() {
  const mods = fs.readdirSync(modsDir).filter(f => f.endsWith('.js'));

  return mods.map(mod => {
    const modPath = path.join(modsDir, mod);
    try {
      const modCode = require(modPath);
      modCode.init && modCode.init();
      return { name: mod, status: "loaded" };
    } catch (e) {
      return { name: mod, status: "error", error: e.message };
    }
  });
}

module.exports = { loadMods };
