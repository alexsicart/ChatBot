$(document).ready(function()
	{
	$(".container .right .write .write-link.send").click(function () {
	var data = $(".container .right .write input").val();
  $('.container .right .chat .name').append(function(){
    var joan = ['Hello', 'Goodbye', 'Bye', 'How are you?', 'What are you doing?', 'A dreamer', '!', 'Do it!', 'Ahhhh' ];

    return  'Alex says: ' + ' ' + data + ' .<br/><br/> ';

    $('.container .right .chat .name').append(function(){

      return 'Joan says: ' + ' ' + joan[Math.floor(Math.random()*9)] + ' .<br/><br/> ';

    });


    });
	});
});
