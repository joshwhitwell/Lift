//modules
const db = require("../../../database/databaseConfig");

//access methods
function find() {
  try {
    return db("users");
  } catch (err) {
    console.log(err);
    return err;
  }
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
