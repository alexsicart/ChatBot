$(document).ready(function(){
$('.container .right .write .write-link.send').click(function(){

$('.container .right .chat .name').append(
    $('<input> <br/>', {
        type: 'text',
        val: $('#capa').text()

    })
  );
});
});
