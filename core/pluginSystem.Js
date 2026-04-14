const fs = require('fs');
const path = require('path');

const pluginDir = path.join(__dirname, '../plugins');

function runPlugins(context) {
  const plugins = fs.readdirSync(pluginDir);

  plugins.forEach(file => {
    try {
      const plugin = require(path.join(pluginDir, file));
      plugin.run && plugin.run(context);
    } catch (err) {
      console.error("Plugin failed:", file, err);
    }
  });
}

module.exports = { runPlugins };
