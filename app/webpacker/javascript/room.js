$(function() {
  $('#new_room_message').on('ajax:success', function(a, b,c ) {
    $('.chat-input').val('');
  });
  $('#new_room_message').on('ajax:error',function(a, b,c ) {
    $('.chat-input input').val('Message not sent');
  });
});