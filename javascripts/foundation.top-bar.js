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
          $titleLi = $('<li class="title show-on-phones js-generated"><h5></h5></li>');

      event.preventDefault();
      
      currentIndex += 1;
      
      $selectedLi.addClass('active');
      $this.closest('.attached').find('>ul').css({'left': '-' + 100 * currentIndex + '%'});
      
      // Copy link to subnav
      $titleLi.find('h5').html($selectedLi.children('a').first().html());
      $nextLevelUl.prepend($titleLi);
      $nextLevelUl.prepend('<li class="back show-on-phones js-generated"><a href="">&larr; Back</a></li>');
    }
  });
  
  $('.top-bar .has-dropdown .back').live('click', function (event) {
    console.log('go up');
    var $this = $(this),
        $activeLi = $this.closest('li.active');
    
    event.preventDefault();
    
    currentIndex -= 1;
    
    $this.closest('.attached').find('>ul').css({'left': '-' + 100 * currentIndex + '%'});
    
    setTimeout(function () {
      $activeLi.removeClass('active');
      $activeLi.find('.js-generated').remove();
    }, 200);
  });
  
}(jQuery));