(function ($) {
  "use strict";
  function portfolio_init() {
    var portfolio_grid = $("#portfolio_grid"),
      portfolio_filter = $("#portfolio_filters");
    if (portfolio_grid) {
      portfolio_grid.shuffle({ speed: 450, itemSelector: "figure" });
      $(".site-main-menu").on("click", "a", function (e) {
        portfolio_grid.shuffle("update");
      });
      portfolio_filter.on("click", ".filter", function (e) {
        portfolio_grid.shuffle("update");
        e.preventDefault();
        $("#portfolio_filters .filter").parent().removeClass("active");
        $(this).parent().addClass("active");
        portfolio_grid.shuffle("shuffle", $(this).attr("data-group"));
      });
    }
  }
  $(function () {

});
  function mobileMenuHide() {
    var windowWidth = $(window).width();
    if (windowWidth < 1024) {
      $(".site-nav").addClass("mobile-menu-hide");
    }
  }
  $(document).ready(function () {
    var $portfolio_container = $("#portfolio_grid");
    $portfolio_container.imagesLoaded(function () {
      setTimeout(function () {
        portfolio_init(this);
      }, 500);
    });
    $(" #portfolio_grid > figure > a ").each(function () {
      $(this).hoverdir();
    });
    $(".menu-toggle").click(function () {
      $(".site-nav").toggleClass("mobile-menu-hide");
    });
    $(".testimonials.owl-carousel").owlCarousel({
      nav: true,
      items: 1,
      loop: true,
      navText: false,
      margin: 10,
    });
    setTimeout(function () {
      var $container = $(".blog-masonry");
      $container.masonry();
    }, 500);
    $(".site-main-menu").on("click", "a", function (e) {
      var $container = $(".blog-masonry");
      $container.masonry();
    });
    // Customize Magnific Popup options
$(".lightbox").magnificPopup({
    type: "image",
    removalDelay: 300,
    mainClass: "mfp-fade",
    image: { titleSrc: "title" },
    iframe: {
      markup:
        '<div class="mfp-iframe-scaler">' +
        '<div class="mfp-close"></div>' +
        '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' +
        '<div class="mfp-title mfp-bottom-iframe-title"></div>' +
        "</div>",
      patterns: {
        youtube: {
          index: "youtube.com/",
          id: "v=",
          src: "//www.youtube.com/embed/%id%?autoplay=1",
        },
        vimeo: {
          index: "vimeo.com/",
          id: "/",
          src: "//player.vimeo.com/video/%id%?autoplay=1",
        },
        gmaps: { index: "//maps.google.", src: "%id%&output=embed" },
      },
      srcAction: "iframe_src",
    },
    callbacks: {
      markupParse: function (template, values, item) {
        // Create a wrapper for title and link
        var titleAndLink = '<div class="title-link-wrapper" style="display: flex; justify-content: space-between; margin-top:8px/*/">';
  
        // Add the title to the left side
        titleAndLink += '<div class="mfp-title mfp-bottom-iframe-title-left">' + values.title + '</div>';
  
        // Add the link to the right side if a data-website attribute is present
        var websiteURL = item.el.parents("figure").data("website");
        if (websiteURL) {
          titleAndLink += '<div style="float:right"; class="project-link"><a href="' + websiteURL + '" target="_blank"><i class="fa fa-link"></i> Visit Website</a></div>';
        }
  
        // Close the wrapper
        titleAndLink += '</div>';
  
        // Replace the title with the title and link wrapper
        values.title = titleAndLink;
      },
    },
  });
  });
  $(window).on("load", function () {
    $(".preloader").fadeOut("slow");
  });
  $(window).on("resize", function () {
    mobileMenuHide();
  });
  $(".site-main-menu").on("click", "a", function (e) {
    mobileMenuHide();
  });
})(jQuery);


