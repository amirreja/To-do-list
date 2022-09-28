//check off specific todos by clicking
$("ul").on("click","li", function(){
$(this).toggleclass("completed");
});
// click on X to delete todo 
$("ul").on("click","span",function(event){
    $(this).parent().fadeOut(500,function(){
    $(this).remove();
    });
    event.stopPropogation();

});
$("input[type='text']").keypress(function (event) {
 
    if (event.which === 13) {
      // Input Field Should not be empty
      if($('input').val() === ""){
        alert("Uh oh! You have not Enter Anything.");
        return false;
      }
   
      // grabbing new todo text from input
      var todoText = $(this).val();
      $(this).val("");
      // create a new li add to ul
      $("ul").append("<li><span><i class='fa fa-trash'></i></span>" + todoText + "</li>");
    }
  });


$("#toggle-form").click(function(){
    $("input[type='text']").fadeToggle();
});

