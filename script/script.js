$(document).ready(function(){
	$('.container .right .write .write-link.send').click(function(){
		$('.container .right .chat .name').append(function(){
				var alex = ['Hello', 'Goodbye', 'Bye', 'How are you?', 'What are you doing?', 'A dreamer', 'Gooooo!', 'Do it!', 'Ahhhh' ];
				var joan = ['Hello', 'Goodbye', 'Bye', 'How are you?', 'What are you doing?', 'A dreamer', 'Gooooo!', 'Do it!', 'Ahhhh' ];

				var math1 = Math.round(Math.random()*1);

					if(math1 === 0){
						return  'Alex says: ' + ' ' + alex[Math.floor(Math.random()*9)] + ' .<br/><br/> ';
					}
					else {
						return 'Joan says: ' + ' ' + joan[Math.floor(Math.random()*9)] + ' .<br/><br/> ';
					}


						});

						$('.container .right .chat .name').append('________________________________<br/><br/>');
			});


});



$(document).ready(function(){

	$('.container .right .write .write-link.send').click(function(){
		$('.container .right .chat .name').append(function(){
			alert($("#capa").data('mi dato'));

});
