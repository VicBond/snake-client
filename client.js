const net = require("net");

const connect = function() {
  const conn = net.createConnection({
    host: '165.227.47.243', // IP address here,
    port: '50541',// PORT number here,
  
  });
  const name = "OPP";
  conn.setEncoding("utf8");
  
  conn.on("data", (data) => {
    console.log("server says:", data);
  });

  conn.on("connect", () => {
    // code that does something when the connection is first established
    console.log(`Name: ${name}`);
    // setTimeout(function() {
    //   conn.write("Move: down");
    // }, 50);
    // setTimeout(function() {
    //   conn.write("Move: left");
    // }, 50);
    // setInterval(function () {
    //   conn.write("Move: up");
    // }, 50);
    // conn.write("Move: left");
    // conn.write("Move: down");
  });
  // interpret incoming data as text
  // stdin.setEncoding('utf8');

  conn.on("event name", () => {
    // code that does something
    // conn.on('Name: Sneaky');
   
  });

  // stdin.on('data', (input) => {
  //   conn.write(`${name}: ${input}`);
  // });

  return conn;
};

module.exports = {connect};