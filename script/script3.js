jQuery(function(){
    $("#capa").keypress(function() {
      var value = $("#capa").val();
      $(".container .right .chat").append(value);
    });
});
