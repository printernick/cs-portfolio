//After document finishes loading
$(document).ready(function()
{
  // var lastScrollTop = 0;
  // $(window).scroll(function(event){
  //    var st = $(this).scrollTop();
  //    if (st == lastScrollTop)
  //    {
  //      $(".main-header").delay(200).fadeOut();
  //    }
  //    else if (st > lastScrollTop)
  //    {
  //      // downscroll code
  //      $(".main-header").hide(100);
  //    }
  //    else
  //    {
  //     // upscroll code
  //     $(".main-header").show(100);
  //
  //    }
  //    lastScrollTop = st;
  // });

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
  });

  $(".carousel-container .carousel-item").on({
    mouseenter: function ()
    {
      // $(this).children(".carousel-item-title").css("display", "block");
      $(this).children(".carousel-item-title").show(100);
    },
    mouseleave: function ()
    {
      $(this).children(".carousel-item-title").hide();
    }
  });


}); //end document ready
