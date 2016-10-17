/*About*/
$(".foodie1").hide();

$(".about").on("click",function(){
   $(".foodie1").slideToggle();
});

/*Filters*/
$(".hood").hide();

$(".li1").on("click", function(){
   $(".hood").slideToggle();
});

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