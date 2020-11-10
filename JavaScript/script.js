$(function () {

  var icons = {
    header: "ui-icon-plusthick",
    activeHeader: "ui-icon-minusthick"
  };
  $("#accordion").accordion({
    icons: icons,
    collapsible: true
  });

  $(".fancybox").fancybox({
    openEffect: 'none',
    closeEffect: 'none'
  });

  $(".buttonSort").on("click", function () {
    console.log($(this).text());
  });

  buttonSort = document.querySelectorAll(".buttonSort".split(''))
  console.log(buttonSort)

});

