//modules
const db = require("../../../database/databaseConfig");

//access methods
function find() {
  return db("users");
}

async function add(user) {
  try {
    const result = await db("users").insert(user);
    return result;
  } catch (err) {
    console.log(err);
    return err;
  }
}

module.exports = {
  find,
  add,
};
