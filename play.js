const {connect} = require("./client");
// establishes a conn with the game server

const handleUserInput = (key) => {
  if (key === '\u0003') {
    process.exit();
  }

};

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', handleUserInput);
  return stdin;
};


console.log("Connecting ...");
setupInput();
connect();