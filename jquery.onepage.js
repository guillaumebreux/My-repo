(function($)
{
  $.fn.jqueryOnepage=function(options)
  {
    var defauts=
    {
      //You can change theses options on your html document
        /*0. General settings*/
      'menuClass'       : '.mainmenu',//this is the class of your main menu.
      'stickClass'      : 'stick', //change the name of your sticky class (without dot or #). You'll need to stylise it in a certain way to make it work.
        /*1. SmoothScroll*/
      'smoothClass'     : '.smoothLink', //Add this class for every links you want to smooth. (don't forget the related anchor)
      'timeSmooth'      : 800, //Change the duration of the smoothscroll
        /*2. ReturnTop button*/
      'returnTop'       : false, //set true if you want a returnTop button appears after scrolling a bit.
      'returnClass'     : 'a.returntop', //if returnTop is true, add your sylized class for a personnal returnTop button
        /*3. Highlight menu*/
      'activeMenu'      : false, //set true if you want a highlight class to show to visitor where they currently are in the page.
      'linkActiveClass' : 'active', //add your class (without dot or #) for a sylized highlight class.
      'anchorClass'     : '.anchor'//add this class or change the name but you'll need to add this for every anchor link on your main menu for highlighting them.
    };  
    var settings=$.extend(defauts, options);      
    return this.each( function() {  
      /*0. General settings*/
        // global variables
      var navHeight = $(settings.menuClass).height();
      var windowHeight = $(window).height();
      var documentHeight = $(document).height();
      var navOffsetTop = $(settings.menuClass).offset().top;
      var scrollPosition = $(window).scrollTop();
      
        //sticky menu (if you came to the page by an anchor or if you refresh when you scrolled down before)
        if (scrollPosition >= navOffsetTop) { 
          $(settings.menuClass).addClass(settings.stickClass);
          if (settings.returnTop) {
            $(settings.returnClass).fadeIn();
          }
        } 
        //highlight the current menu you were after refreshing the page or if you came by an anchor related link.
       if (settings.activeMenu) {
          $(settings.anchorClass).each(function(){
            var ancrePositionId = $(this).attr("href");
            var ancrePosition = $(ancrePositionId).offset().top;
            if(scrollPosition >= (ancrePosition - navHeight)) {
              $(settings.anchorClass).removeClass(settings.linkActiveClass); 
              $("a[href=\""+ancrePositionId+"\"]").addClass(settings.linkActiveClass);
            }
            else if ((scrollPosition+windowHeight) == documentHeight){
              $(settings.anchorClass).removeClass(settings.linkActiveClass); 
              $("a[href=\""+ancrePositionId+"\"]").addClass(settings.linkActiveClass);    
            }
            else {
              $("a[href=\""+ancrePositionId+"\"]").removeClass(settings.linkActiveClass); 
            }
          });
        } 

      /* 1. SmoothScroll */
      $(settings.smoothClass).click(function(){  
          var idAncre = $(this).attr("href");
          $('html, body').stop().animate({
              scrollTop:(($(idAncre).offset()).top-navHeight )
          }, settings.timeSmooth); 
        return false;
      }); 
        

      /* 2. ReturnTop button && 3. Highlight menu*/
      $(window).scroll(function() {
        var scrollPosition = $(window).scrollTop();
        /* 2. ReturnTop button && Sticky menu */
        if (scrollPosition >= navOffsetTop) { 
          $(settings.menuClass).addClass(settings.stickClass);
          //if returnTop is true.
          if (settings.returnTop) {
            $(settings.returnClass).fadeIn();
          }
        } 
        else {
          $(settings.menuClass).removeClass(settings.stickClass);
          if (settings.returnTop) {
            $(settings.returnClass).fadeOut();
          }
        } 
        /* 3. Highlight menu*/ 
        if (settings.activeMenu) {
          $(settings.anchorClass).each(function(){
            var ancrePositionId = $(this).attr("href");
            var ancrePosition = $(ancrePositionId).offset().top;
            if(scrollPosition >= (ancrePosition - navHeight)) {
              $(settings.anchorClass).removeClass(settings.linkActiveClass); 
              $("a[href=\""+ancrePositionId+"\"]").addClass(settings.linkActiveClass);
            }
            else if ((scrollPosition+windowHeight) == documentHeight){
              $(settings.anchorClass).removeClass(settings.linkActiveClass); 
              $("a[href=\""+ancrePositionId+"\"]").addClass(settings.linkActiveClass);    
            }
            else {
              $("a[href=\""+ancrePositionId+"\"]").removeClass(settings.linkActiveClass); 
            }
          });
        } 
      });
  });
};
})(jQuery);