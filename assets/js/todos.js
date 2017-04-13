//Check of specific Todos By Clicking
$("ul").on("click", "li", function(){
  $(this).toggleClass("completed");
});

//Click on X to delete Todos
$("ul").on("click", "span", function(event){
  $(this).parent().fadeOut(500,function(){
    $(this).remove();
  });
  event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
  //the enter key has the code 13
  if(event.which === 13){
    //grabbing new todo text from input
    var todoText = ($(this).val());
    $(this).val("");
    //create a new li and add to ul
    $("ul").append("<li><span><i class='fa fa-scissors' aria-hidden='true'></i></span> " + todoText + "</li>")
  }
});

$(".fa-pencil-square-o").click(function(){
  $("input[type='text']").fadeToggle();
});
