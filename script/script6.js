$(document).ready(function()
	{
      var joan = ['Hello', 'Goodbye', 'Bye', 'How are you?', 'What are you doing?', 'A dreamer', '!', 'Do it!', 'Ahhhh' ];

	$('#send').click(function () {

	var data = $('.write .input').val();

  $('.chat .name').append('Alex says: ' + ' ' + data + ' .<br/><br/> ');
  $( '.chat .name' ).append('Joan says: ' + ' ' + joan[Math.floor(Math.random()*9)] + ' .<br/><br/> ');

	});

});
