$(document).ready(function()
	{
      var joan = ['Hello', 'Goodbye', 'Bye', 'How are you?', 'What are you doing?', 'A dreamer', '!', 'Do it!', 'Ahhhh' ];

	$(".container .right .write .write-link.send").click(function () {
    
	var data = $(".container .right .write input").val();

  $('.container .right .chat .name').append('Alex says: ' + ' ' + data + ' .<br/><br/> ');
  $( ".container .right .chat .name" ).after('Joan says: ' + ' ' + joan[Math.floor(Math.random()*9)] + ' .<br/><br/> ');

	});

});
