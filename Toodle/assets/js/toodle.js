// Check Off Specific Todos By Clicking
$("ul").on("click", "li", function(event){
	$(this).toggleClass("completed");
});

//Click on X to delete Todo
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
	if(event.which === 13){ //Event associated with number, 13=Enter
		//grabbing new todo text from input
		var todoText = $(this).val();
		$(this).val(""); //Clearing the input box
		//create a new li and add to ul
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>")
	}
});

$("h1").on("click",".fa-plus",function(){
	$('input[type="text"]').fadeToggle();
});