(function ($) {
  var currentIndex = 0;
  
  function onMobile() {
    return true;
    return $(window).width() < 768;
  }
  
  $('.top-bar .name').live('click', function (event) {
    if (onMobile()) {
      event.preventDefault();

      $(this).closest('.attached').toggleClass('expanded');
    }
  });
  
  $('.top-bar .has-dropdown>a').live('click', function (event) {
    if (onMobile()) {
      var $this = $(this),
          $selectedLi = $this.closest('li'),
          $nextLevelUl = $selectedLi.find('>ul'),
          $titleLi = $('<li class="title show-on-phones js-generated"><h5></h5></li>'),
          $attached = $this.closest('.attached');

      event.preventDefault();
      
      currentIndex += 1;
      
      $selectedLi.addClass('active');
      $attached.css({'left': '-' + 100 * currentIndex + '%'});
      $attached.find('>.name').css({'left': 100 * currentIndex + '%'});
      
      // Copy link to subnav
      $titleLi.find('h5').html($selectedLi.children('a').first().html());
      $nextLevelUl.prepend($titleLi);
      $nextLevelUl.prepend('<li class="back show-on-phones js-generated"><a href="">&larr; Back</a></li>');
    }
  });
  
  $('.top-bar .has-dropdown .back').live('click', function (event) {
    var $this = $(this),
        $activeLi = $this.closest('li.active'),
        $attached = $this.closest('.attached');
    
    event.preventDefault();
    
    currentIndex -= 1;
    
    $attached.css({'left': '-' + 100 * currentIndex + '%'});
    $attached.find('>.name').css({'left': 100 * currentIndex + '%'});
    
    setTimeout(function () {
      $activeLi.removeClass('active');
      $activeLi.find('.js-generated').remove();
    }, 200);
  });
  
}(jQuery));