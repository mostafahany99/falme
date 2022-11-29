const express = require('express');
const server = express();
 
server.all('/', (req, res) => {
  res.send(`Bird YT Youtube Bot`)
})
 
function keepAlive() {
  server.listen(3000, () => { console.log("Server is Ready! - Bird YT" + Date.now()) });
}
 
module.exports = keepAlive;