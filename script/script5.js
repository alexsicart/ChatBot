$(document).ready(function()
	{
	$(".container .right .write .write-link.send").click(function () {
	//saco el valor accediendo al class del input = nombre
	var data = $(".container .right .write input").val();
  $('.container .right .chat .name').append(function(){
    var joan = ['Hello', 'Goodbye', 'Bye', 'How are you?', 'What are you doing?', 'A dreamer', '!', 'Do it!', 'Ahhhh' ];

var math = Math.round(Math.random()*1);

if(math === 0){
        return  'Alex says: ' + ' ' + data + ' .<br/><br/> ';

      } else {

        return 'Joan says: ' + ' ' + joan[Math.floor(Math.random()*9)] + ' .<br/><br/> ';
  }



    });
	});
});
