$(document).on('page:fetch', function() {
  //jquery(".loading-indicator").show();
  $("html").css( "cursor", "progress" )
  return
});

$(document).on('page:change', function() {
  //jquery(".loading-indicator").hide();
  $("html").css( "cursor", "auto" )
  return
});