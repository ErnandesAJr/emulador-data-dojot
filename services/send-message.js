const DataFaker = require("./create-data-fake");

module.exports.send = (chanel, socket) => {

  var counterMessages = 0;

  const idInterval = setInterval(() => {    
  var dataFaker = DataFaker.createDataFake();
  counterMessages++;
  socket.broadcast.emit(chanel, dataFaker);
  if(process.env.LIMITS && counterMessages == process.env.LIMITS){
    clearInterval(idInterval)
  }
}, 1000); 
};
