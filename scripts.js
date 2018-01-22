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


// Scroll ////////////////////////////////////////////////////////////////////////////////////
$("a[href='#backtotop']").click(function() {
  $('html,body').animate({
   scrollTop: $("#bootstrapoverride").offset().top - 25
  });
});

$("a[href='#scrolltocontact']").click(function() {
  $('html,body').animate({
   scrollTop: $("#scrolltocontact").offset().top
  });
});

// Show ////////////////////////////////////////////////////////////////////////////////////
$("#showcasestudy").click(function(){
  $(".post__casestudy").css("display", "block");
  return false;
});








