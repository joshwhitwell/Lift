//modules
require("dotenv").config();
const server = require("./server");

//configs
const PORT = process.env.PORT || 5000;

//establish server connection on env port
server.listen(PORT, () => {
  console.log(`\n*** Server listening on PORT:${PORT} ***\n`);
});
