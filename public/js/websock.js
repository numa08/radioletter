var onMessage = function(message) {
  console.log("Server send " + message.data);
};

var onError = function(error) {
  console.log("Server error" + error);
};

var onClickSend = function() {
  var webSock = new WebSocket('ws://localhost:9000/post');
  webSock.onmessage = onMessage;
  webSock.onerror = onError;
  webSock.onopen = function() {
    webSock.send("message");
  };
}
