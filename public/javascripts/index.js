$(function(){
  require("socket.io");
  var sock = new io.connect('http://localhost:3000');
  $('#form').submit( function() {
    socket.emit('message send', $("#message").val());
    $('#message').val('');
    return false;
  })

  socket.on('message push', function(msg, author){
    $('#chatarea').append('<br/>' + '[' + author + ']' + msg );
  });
});
