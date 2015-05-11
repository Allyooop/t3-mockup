jquery(document).on('page:fetch', function() {
  //jquery(".loading-indicator").show();
  jquery("html").css( "cursor", "progress" )
  return
});

jquery(document).on('page:change', function() {
  //jquery(".loading-indicator").hide();
  jquery("html").css( "cursor", "auto" )
  return
});