var restaurants = $(".restaurant-item");
var neighbor = "";
var food = "";
var money = "";
var dates = "";
var sphere = "";

// Open and Close Filters
$("#hood").on("click", function(){

   if ($(this).hasClass("open")) {
      $(this).removeClass("open");
      $("#hood").animate({
         height: 250
      });

   } else {
      $(this).addClass("open");
      $("#hood").animate({
         height: 250
      });
   }

});


// Open And Close Filters Continued
$("#cuisine").on("click", function(){

  if ($(this).hasClass("open")) {
   $(this).removeClass("open");
   $("#cuisine").animate({
   	height: 250
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
   	height: 250
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
   	height: 250
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
   	height: 250
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
	neighbor = $(this).text();


    $("#hood li").removeClass("active");
   $(this).addClass("active");

   $(this).animate({
      opacity: 1
   });

   $("#hood li").not(this).animate({
      opacity: 0.3
   });

});

$("#cuisine li").on("click", function(){
  food = $(this).text();

   $("#cuisine li").removeClass("active");
   $(this).addClass("active");

   $(this).animate({
      opacity: 1
   });

   $("#cuisine li").not(this).animate({
      opacity: 0.3
   });

});

$("#price li").on("click", function(){
  money = $(this).text();

   $("#price li").removeClass("active");
   $(this).addClass("active");

   $(this).animate({
      opacity: 1
   });

   $("#price li").not(this).animate({
      opacity: 0.3
   });

});

$("#good li").on("click", function(){
  dates = $(this).text();

   $("#good li").removeClass("active");
   $(this).addClass("active");

   $(this).animate({
      opacity: 1
   });

   $("#good li").not(this).animate({
      opacity: 0.3
   });

});

$("#atmo li").on("click", function(){
  sphere = $(this).text();

   $("#atmo li").removeClass("active");
   $(this).addClass("active");

   $(this).animate({
      opacity: 1
   });

   $("#atmo li").not(this).animate({
      opacity: 0.3
   });

});



// Clicking on Multiple Filters Without Impacting Overall Result
   // show results of filters, opacity
var matchesFilter = true;

$("#gogo").on("click", function(){
   console.log("Neighbor:",neighbor, "Money:",money, "Dates:", dates, "Sphere:",sphere, "Food:",food);

   $.each(restaurants, function(index,element){
      matchesFilter = true;

      // console.log(index,element);
      // if ($(element).attr('data-hood') === neighbor ) {
      //    $(element).show();
      // } else {
      //    $(element).hide();
      // }


      // if neighbor is not empty
      if (neighbor !== "") {
         // if not, is data-hood equal to neighbor
         // if ($(element).attr('data-hood') !== neighbor ) {
         if ($(element).attr('data-hood').indexOf(neighbor) < 0) {
            // if not, then set matchesfilter to false
            matchesFilter = false;
         };
      };

       if (food !== "") {
         // if not, is data-hood equal to neighbor
         if ($(element).attr('data-cuisine').indexOf(food) < 0) {
            // if not, then set matchesfilter to false
            matchesFilter = false;
         };
      };

       if (money !== "") {
         // if not, is data-hood equal to neighbor
         if ($(element).attr('data-price').indexOf(money) < 0) {
            // if not, then set matchesfilter to false
            matchesFilter = false;
         };
      };

       if (dates !== "") {
         // if not, is data-hood equal to neighbor
         if ($(element).attr('data-good').indexOf(dates) < 0) {
            // if not, then set matchesfilter to false
            matchesFilter = false;
         };
      };

       if (sphere !== "") {
         // if not, is data-hood equal to neighbor
         if ($(element).attr('data-atmo').indexOf(sphere) < 0) {
            // if not, then set matchesfilter to false
            matchesFilter = false;
         };
      };

      // REPEAT for all filters

      // if matchesfilter is equal to true

      if (matchesFilter === true) {
         $(element).animate({
            opacity: 1
         })
      } else {
         $(element).animate({
            opacity: .1
         })
         
      }
      // if so, then show the item
      // if not then hide the item
   });
});


// Clear All Filters
$("#clear").on("click",function(){
   neighbor = "";
   food = "";
   money = "";
   dates = "";
   sphere = "";
   $(".dropdown").removeClass("active");
   $("li").removeClass("active");
   $("li").animate({
      opacity: 1
   });
   $(".restaurant-item").animate({
      opacity: 1
   });

});


// Previous Opacity

// $('.restaurant-item[data-hood="'+neighbor+'"]').animate({
   //    opacity: 1
   // });

   // $(".restaurant-item").not('.restaurant-item[data-hood="' +neighbor+ '"]').animate({
   //    opacity: 0.1
   // });



   











