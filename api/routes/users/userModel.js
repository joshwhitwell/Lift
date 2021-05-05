//modules
const db = require("../../../database/databaseConfig");

//access methods
function find() {
  return db("users");
}

module.exports = {
  find,
};
