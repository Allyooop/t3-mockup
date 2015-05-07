jquery(document).on('page:fetch', function() {
  jquery(".loading-indicator").show();
});

jquery(document).on('page:change', function() {
  jquery(".loading-indicator").hide();
});