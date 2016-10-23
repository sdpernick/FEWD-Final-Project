/*About*/
$(".foodie1").hide();

$(".about").on("click",function(){
   $(".foodie1").slideToggle();
});


/*Filters*/
$(".categories .hood").on("click", function(){
   $(".sub-categories .hood").slideToggle();
});

$(".categories .cuisine").on("click", function(){
   $(".sub-categories .cuisine").slideToggle();
});

$(".categories .price").on("click", function(){
   $(".sub-categories .price").slideToggle();
});

$(".categories .good").on("click", function(){
   $(".sub-categories .good").slideToggle();
});

$(".categories .atmo").on("click", function(){
   $(".sub-categories .atmo").slideToggle();
});

/* do this instead of the above:
$(".categories .hood").on("click", function(){
   $(".sub-categories .hood").slideToggle();
});


Original Code

$(".cuisine").hide();

$(".li2").on("click", function(){
   $(".cuisine").slideToggle();
});

$(".price").hide();

$(".li3").on("click", function(){
   $(".price").slideToggle();
});

$(".good").hide();

$(".li4").on("click", function(){
   $(".good").slideToggle();
});

$(".atmo").hide();

$(".li5").on("click", function(){
   $(".atmo").slideToggle();
});
/*
