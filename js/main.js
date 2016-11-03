// Open and Close Filters
$("#hood").on("click", function(){

   if ($(this).hasClass("open")) {
      $(this).removeClass("open");
      $("#hood").animate({
         height: 50   
      });

   } else {
      $(this).addClass("open");
      $("#hood").animate({
         height: 250
      });
   }  
});

// Change Link Color
$("#hood").on("click", function(){
   $(this).addClass("active");
});


// Open And Close Filters Continued
$("#cuisine").on("click", function(){

  if ($(this).hasClass("open")) {
   $(this).removeClass("open");
   $("#cuisine").animate({
   	height: 50
   });

   } else {
      $(this).addClass("open");
      $("#cuisine").animate({
         height: 250
      });
   }
});

$("#price").on("click", function(){

  if ($(this).hasClass("open")) {
   $(this).removeClass("open");
   $("#price").animate({
   	height: 50
   });

   } else {
      $(this).addClass("open");
      $("#price").animate({
         height: 150
      });
   }


});

$("#good").on("click", function(){
   
   if ($(this).hasClass("open")) {
   $(this).removeClass("open");
   $("#good").animate({
   	height: 50
   });

   } else {
      $(this).addClass("open");
      $("#good").animate({
         height: 250
      });
   }
});

$("#atmo").on("click", function(){
   
   if ($(this).hasClass("open")) {
   $(this).removeClass("open");
   $("#atmo").animate({
   	height: 50
   });

   } else {
      $(this).addClass("open");
      $("#atmo").animate({
         height: 250
      });
   }
});


// Selected Restaurants and Opacity
$("#hood li").on("click", function(){
	var neighbor = $(this).text();

   $('.restaurant-item[data-hood="'+neighbor+'"]').animate({
      opacity: 1
   });

   $(".restaurant-item").not('.restaurant-item[data-hood="' +neighbor+ '"]').animate({
      opacity: 0.1
   });

});

$("#cuisine li").on("click", function(){
   var food = $(this).text();

   $('.restaurant-item[data-cuisine="' +food+ '"]').animate({
      opacity: 1
   });

   $(".restaurant-item").not('.restaurant-item[data-cuisine="' +food+ '"]').animate({
      opacity: 0.1
   });

   $("#cuisine li").removeClass("active");
   $(this).addClass("active");

});

$("#price li").on("click", function(){
   var money = $(this).text();

$('.restaurant-item[data-price="' +money+ '"]').animate({
   opacity: 1
});

$(".restaurant-item").not('.restaurant-item[data-price="' +money+ '"]').animate({
   opacity: 0.1
});

});

$("#good li").on("click", function(){
   var dates = $(this).text();

$('.restaurant-item[data-good="' +good+ '"]').animate({
   opacity: 1
});

$(".restaurant-item").not('.restaurant-item[data-good="' +dates+ '"]').animate({
   opacity: 0.1
});

});

$("#atmo li").on("click", function(){
   var sphere = $(this).text();

$('.restaurant-item[data-atmo="' +sphere+ '"]').animate({
   opacity: 1
});

$(".restaurant-item").not('.restaurant-item[data-atmo="' +sphere+ '"]').animate({
   opacity: 0.1
});

});


// Clicking on Multiple Filters Without Impacting Overall Result

$("#hood li").on("click", function(){
var resItems = (".restaurant-item");
 // save variable

$("#gogo").on("click", function(){
   // show results of filters, opacity
})

if  ((neighbor !== ""){
    $(this).show(".restaurant-item");
});

// ?????

 if (food !== "")
 if (money !== "")
 if (dates !== "")
 if (sphere !== "")



$(".restaurant-item").attr('data-hood') === neighbor && $(".restaurant-item").attr('data-cuisine') === food && 
$(".restaurant-item").attr('data-price') === money && $(".restaurant-item").attr('data-good') === dates &&
$(".restaurant-item").attr('data-atmo') === sphere

for (var resItems = 0; resItems < 5; resItems++) {
   
}

$("#cuisine li").on("click", function(){
$("#price li").on("click", function(){
$("#good li").on("click", function(){
$("#atmo li").on("click", function(){












