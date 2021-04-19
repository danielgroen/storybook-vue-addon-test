function managerEntries(entry = []) {
  return [...entry, require.resolve("./register")]; //👈 addon implementation
}

module.exports = { managerEntries };
module.exports = require("./dist/preset.js");
