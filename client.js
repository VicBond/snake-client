const net = require("net");

const connect = function() {
  const conn = net.createConnection({
    host: '165.227.47.243', // IP address here,
    port: '50541',// PORT number here,
    //IP: 165.227.47.243
    // PORT: 50541
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("event name", () => {
    // code that does something
    // client.write('Move: Up');
   
  });
  conn.on("connect", () => {
    // code that does something when the connection is first established
    // client.write('Name: Sneaky');
  });

  return conn;
};

module.exports = connect;