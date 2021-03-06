const net = require("net");
const { IP, PORT } = require("./constants");

const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

  conn.setEncoding("utf8");
  
  conn.on("data", (data) => {
    console.log("server says:", data);
  });

  conn.on("connect", () => {
    console.log(`Server Says: `,'successfully connected to the snake server');
  });
  return conn;
};

module.exports = { connect };