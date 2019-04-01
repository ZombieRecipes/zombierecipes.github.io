$(function() {
  function closeDropdowns(button){
    let whatNeedClose = $(button).next('.teleport').find('.uk-dropdown.uk-open');
    if (whatNeedClose.length !== 0){
      UIkit.dropdown(whatNeedClose).hide();
    };
    setTimeout(function() { teleportDropdown(button) }, 1000);
  }

  function teleportDropdown(button){
    UIkit.notification({
      message: '<div id="insertmove"></div>',
      status: 'primary',
      pos: 'top-right',
      timeout: 999999999
    });
    $(button).next('.teleport').clone().appendTo( "#insertmove" );
    $('#insertmove').removeAttr('id');
  }

  $(".affix").click(function(e) {
    e.preventDefault();
    closeDropdowns($(this));
  });

  $("#sidebar ul li").click(function() {
    $('#sidebar ul li').removeClass('uk-active');
    $(this).addClass('uk-active');
  });
 $("header form input").keyup(function(){
   _this = this;
   
   $.each($(".recipe .teleport h3"), function() {
     if($(this).text().toLowerCase().indexOf($(_this).val().toLowerCase()) === -1) {
      $(this).closest('.recipe').hide();
     } else {
      $(this).closest('.recipe').show();
     }
   });
 });

 /* Поиск последнего элемента в линии и простановка ему класса */
 var lastElement = false;
 $(window).on('load resize', function () {
    $(".uk-card-body>.recipe").each(function() {
        $(this).removeClass('last');
        if (lastElement && lastElement.offset().top != $(this).offset().top) {
            lastElement.addClass("last");
        }
        lastElement = $(this);
    }).last().addClass("last");
  });
});