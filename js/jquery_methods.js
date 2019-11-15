//After document finishes loading
$(document).ready(function()
{


  $(".menu").on("click", function(e)
  {
    e.preventDefault();
    if ($(".navbar").css("display") == "none")
    {
     $(".navbar").show(100);
    }
    else
    {
     $(".navbar").hide(100);
    }
  });

  $(".navbar-item").on("click", function()
  {
    $(".navbar").hide(100);

    var id = $(this).attr("href");
    var newPosition = $(id).offset().top - 50;

    $(window).scrollTop(newPosition);

    // to animate
    // $("html, body")
    //   .animate({
    //     scrollTop: newPosition //change the subraction from -50 to -150
    //   }, 400)
    //   .promise()
    //   .then(function(){});


  });

  $(".carousel-container .carousel-item").on({
    mouseenter: function ()
    {
      $(this).find(".carousel-item-title").show(100);
    },
    mouseleave: function ()
    {
      $(this).find(".carousel-item-title").hide();
    }
  });


  $(".carousel-back").on("click", function()
  {
    var scrollPos = $(".carousel-container").scrollLeft();
    $(".carousel-container").animate({
      scrollLeft: scrollPos - 200
    }, 800);
  });

  $(".carousel-forward").on("click", function()
  {
    var scrollPos = $(".carousel-container").scrollLeft();
    $(".carousel-container").animate({
      scrollLeft: scrollPos + 200
    }, 800);
  });

  $(".carousel-item").on("click", function()
  {
    try
    {
      var id = "#".concat($(this).attr("title").concat("-Description"));
      $(id).css("display", "flex");
      $(".carousel-container").hide(100);
      $(".carousel-button").hide(100);
    }
    catch(err)
    {
      console.log("detailed page unavailable");
    }
  });

  $(".project-close").on("click", function()
  {
    var detailedProjectContainer = $(this).parent().parent().parent();
    detailedProjectContainer.hide(100);
    $(".carousel-container").show(100);
    $(".carousel-button").show(100);
  });


}); //end document ready
