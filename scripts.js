// Your scripts go here.

//Filters//////////////////////////////////////////////////////////////////////////////////

// All
$( "#filterall, #filterindicator").click(function() {
  $(".filter--all").css("display", "block");
  $("#bootstrapoverride .filter__link--all a").css("color", "#47D9E8");

  $(".filter--ux-research, .filter--ux-design, .filter--ui-design, .filter--front-end, .filter--product-management, .filter--visual-design").css("display", "none");
  $("#bootstrapoverride .filter__link--ux-research a, #bootstrapoverride .filter__link--ux-design a, #bootstrapoverride .filter__link--ui-design a, #bootstrapoverride .filter__link--front-end a, #bootstrapoverride .filter__link--product-management a, #bootstrapoverride .filter__link--visual-design a").css("color", "#252525");
});

// UX Research
$( "#filteruxresearch" ).click(function() {
  $(".filter--ux-research").css("display", "block");
  $("#bootstrapoverride .filter__link--ux-research a ").css("color", "#47D9E8");


  $(".filter--all, .filter--ux-design, .filter--ui-design, .filter--front-end, .filter--product-management, .filter--visual-design").css("display", "none");
  $("#bootstrapoverride .filter__link--all a, #bootstrapoverride .filter__link--ux-design a, #bootstrapoverride .filter__link--ui-design a, #bootstrapoverride .filter__link--front-end a, #bootstrapoverride .filter__link--product-management a, #bootstrapoverride .filter__link--visual-design a").css("color", "#252525");
});

// UX Design
$( "#filteruxdesign" ).click(function() {
  $(".filter--ux-design").css("display", "block");
  $("#bootstrapoverride .filter__link--ux-design a ").css("color", "#47D9E8");


  $(".filter--all, .filter--ux-research, .filter--ui-design, .filter--front-end, .filter--product-management, .filter--visual-design").css("display", "none");
  $("#bootstrapoverride .filter__link--all a, #bootstrapoverride .filter__link--ux-research a, #bootstrapoverride .filter__link--ui-design a, #bootstrapoverride .filter__link--front-end a, #bootstrapoverride .filter__link--product-management a, #bootstrapoverride .filter__link--visual-design a").css("color", "#252525");
});

// UI Design
$( "#filteruidesign" ).click(function() {
  $(".filter--ui-design").css("display", "block");
  $("#bootstrapoverride .filter__link--ui-design a ").css("color", "#47D9E8");

  $(".filter--all, .filter--ux-research, .filter--ux-design, .filter--front-end, .filter--product-management, .filter--visual-design").css("display", "none");
  $("#bootstrapoverride .filter__link--all a, #bootstrapoverride .filter__link--ux-research a, #bootstrapoverride .filter__link--ux-design a, #bootstrapoverride .filter__link--front-end a, #bootstrapoverride .filter__link--product-management a, #bootstrapoverride .filter__link--visual-design a").css("color", "#252525");
});

// Front-End Development
$( "#filterfrontend" ).click(function() {
  $(".filter--front-end").css("display", "block");
  $("#bootstrapoverride .filter__link--front-end a ").css("color", "#47D9E8");

  $(".filter--all, .filter--ux-research, .filter--ux-design, .filter--ui-design, .filter--product-management, .filter--visual-design").css("display", "none");
  $("#bootstrapoverride .filter__link--all a, #bootstrapoverride .filter__link--ux-research a, #bootstrapoverride .filter__link--ux-design a, #bootstrapoverride .filter__link--ui-design a, #bootstrapoverride .filter__link--product-management a, #bootstrapoverride .filter__link--visual-design a").css("color", "#252525");
});

// Product Management
$( "#filterproductmanagement" ).click(function() {
  $(".filter--product-management").css("display", "block");
  $("#bootstrapoverride .filter__link--product-management a ").css("color", "#47D9E8");

  $(".filter--all, .filter--ux-research, .filter--ux-design, .filter--ui-design, .filter--front-end, .filter--visual-design").css("display", "none");
  $("#bootstrapoverride .filter__link--all a, #bootstrapoverride .filter__link--ux-research a, #bootstrapoverride .filter__link--ux-design a, #bootstrapoverride .filter__link--ui-design a, #bootstrapoverride .filter__link--front-end a, #bootstrapoverride .filter__link--visual-design a").css("color", "#252525");
});

// Visual Design
$( "#filtervisualdesign" ).click(function() {
  $(".filter--visual-design").css("display", "block");
  $("#bootstrapoverride .filter__link--visual-design a ").css("color", "#47D9E8");

  $(".filter--all, .filter--ux-research, .filter--ux-design, .filter--ui-design, .filter--front-end, .filter--product-management").css("display", "none");
  $("#bootstrapoverride .filter__link--all a, #bootstrapoverride .filter__link--ux-research a, #bootstrapoverride .filter__link--ux-design a, #bootstrapoverride .filter__link--ui-design a, #bootstrapoverride .filter__link--front-end a, #bootstrapoverride .filter__link--product-management a").css("color", "#252525");
});


// BACK TO TOP////////////////////////////////////////////////////////////////////////////////////
// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .not('[href="#img26"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });



