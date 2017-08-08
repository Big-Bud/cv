$( ".unselected" ).click(function() {
  $(".content").addClass("menu");
  $(".selected").removeClass("selected");
  $( this ).addClass("selected");
});

$( ".candidat-menu" ).click(function() {
    $(".candidat").show();
    $(".diplome").hide();
    $(".xp").hide();
});

$( ".diplome-menu" ).click(function() {
    $(".diplome").show();
    $(".candidat").hide();
    $(".xp").hide();
});

$( ".xp-menu" ).click(function() {
    $(".xp").show();
    $(".candidat").hide();
    $(".diplome").hide();
});
