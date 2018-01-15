// Your scripts go here.

console.log('hello world!');

$("#filterall").click(function() {
    $("filter--all").css("display", "block");
    $("filter--ux-research").css("display", "none");
    $("filter--ux-design").css("display", "none");  
    $("filter--ui-design").css("display", "none");
    $("filter--front-end").css("display", "none");  
    $("filter--product-management").css("display", "none");
    $("filter--visual-design").css("display", "none");  
    $("filter--fine-arts").css("display", "none");  
});

$("#filteruxresearch").click(function() {
    $("filter--all").css("display", "none");
    $("filter--ux-research").css("display", "block");
    // $("filter--ux-design").css("display", "none");  
    // $("filter--ui-design").css("display", "none");
    // $("filter--front-end").css("display", "none");  
    // $("filter--product-management").css("display", "none");
    // $("filter--visual-design").css("display", "none");  
    // $("filter--fine-arts").css("display", "none");  
});

// $("#filteruxdesign").click(function() {
//     $("filter--all").css("display", "none");
//     $("filter--ux-research").css("display", "none");
//     $("filter--ux-design").css("display", "block");  
//     $("filter--ui-design").css("display", "none");
//     $("filter--front-end").css("display", "none");  
//     $("filter--product-management").css("display", "none");
//     $("filter--visual-design").css("display", "none");  
//     $("filter--fine-arts").css("display", "none");  
// });

// $("#filteruidesign").click(function() {
//     $("filter--all").css("display", "none");
//     $("filter--ux-research").css("display", "none");
//     $("filter--ux-design").css("display", "none");  
//     $("filter--ui-design").css("display", "block");
//     $("filter--front-end").css("display", "none");  
//     $("filter--product-management").css("display", "none");
//     $("filter--visual-design").css("display", "none");  
//     $("filter--fine-arts").css("display", "none");  
// });

// $("#filterfrontend").click(function() {
//     $("filter--all").css("display", "none");
//     $("filter--ux-research").css("display", "none");
//     $("filter--ux-design").css("display", "none");  
//     $("filter--ui-design").css("display", "none");
//     $("filter--front-end").css("display", "block");  
//     $("filter--product-management").css("display", "none");
//     $("filter--visual-design").css("display", "none");  
//     $("filter--fine-arts").css("display", "none");  
// });

// $("#filterproductmanagement").click(function() {
//     $("filter--all").css("display", "none");
//     $("filter--ux-research").css("display", "none");
//     $("filter--ux-design").css("display", "none");  
//     $("filter--ui-design").css("display", "none");
//     $("filter--front-end").css("display", "none");  
//     $("filter--product-management").css("display", "block");
//     $("filter--visual-design").css("display", "none");  
//     $("filter--fine-arts").css("display", "none");  
// });

// $("#filtervisualdesign").click(function() {
//     $("filter--all").css("display", "none");
//     $("filter--ux-research").css("display", "none");
//     $("filter--ux-design").css("display", "none");  
//     $("filter--ui-design").css("display", "none");
//     $("filter--front-end").css("display", "none");  
//     $("filter--product-management").css("display", "none");
//     $("filter--visual-design").css("display", "block");  
//     $("filter--fine-arts").css("display", "none");  
// });

// $("#filterfinearts").click(function() {
//     $("filter--all").css("display", "none");
//     $("filter--ux-research").css("display", "none");
//     $("filter--ux-design").css("display", "none");  
//     $("filter--ui-design").css("display", "none");
//     $("filter--front-end").css("display", "none");  
//     $("filter--product-management").css("display", "none");
//     $("filter--visual-design").css("display", "none");  
//     $("filter--fine-arts").css("display", "block");  
// });

// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
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



