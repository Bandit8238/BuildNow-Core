async function checkUpdates() {
  const result = await window.launcherAPI.checkUpdates();
  alert(result.updateAvailable ? "Update Available!" : "Up to date");
}

async function loadMods() {
  const mods = await window.launcherAPI.loadMods();
  console.log(mods);
}

async function loadVersions() {
  const versions = await window.launcherAPI.getVersions();
  const list = document.getElementById("versions");

  versions.forEach(v => {
    const li = document.createElement("li");
    li.innerText = v;
    list.appendChild(li);
  });
}

loadVersions();
