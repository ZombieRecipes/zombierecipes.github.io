$(function() {
  var whatNeedClose;
  function closeDropdowns(button){
    whatNeedClose = $(button).next('.teleport').find('.uk-dropdown.uk-open');
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
});