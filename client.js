const net = require("net");

const connect = function() {
  const conn = net.createConnection({
    host: '165.227.47.243',
    port: '50541',
  
  });

  const name = "OPP";
  conn.setEncoding("utf8");
  
  conn.on("data", (data) => {
    console.log("server says:", data);
  });

  conn.on("connect", () => {
    console.log(`Name: ${name}`);
    console.log(`Server Says: `,'successfully connected to the snake server');
  
  });



  conn.on("event name", () => {
 
    
  });
   

  return conn;
};

module.exports = { connect };