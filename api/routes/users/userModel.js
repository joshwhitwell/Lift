//modules
const db = require("../../../database/databaseConfig");

//access methods
function find() {
  return db("users");
}

async function add(user) {
  console.log("add user hit");
  try {
    const result = await db("users").insert(user);
    console.log.log("add user result", result);
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
