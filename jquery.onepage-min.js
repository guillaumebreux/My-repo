(function(e){e.fn.jqueryOnepage=function(t){var n={menuClass:".mainmenu",stickClass:"stick",smoothClass:".smoothLink",timeSmooth:800,returnTop:false,returnClass:"a.returntop",activeMenu:false,linkActiveClass:"active",anchorClass:".anchor"};var r=e.extend(n,t);return this.each(function(){var t=e(r.menuClass).height();var n=e(window).height();var i=e(document).height();var s=e(r.menuClass).offset().top;var o=e(window).scrollTop();if(o>=s){e(r.menuClass).addClass(r.stickClass);if(r.returnTop){e(r.returnClass).fadeIn()}}if(r.activeMenu){e(r.anchorClass).each(function(){var s=e(this).attr("href");var u=e(s).offset().top;if(o>=u-t){e(r.anchorClass).removeClass(r.linkActiveClass);e('a[href="'+s+'"]').addClass(r.linkActiveClass)}else if(o+n==i){e(r.anchorClass).removeClass(r.linkActiveClass);e('a[href="'+s+'"]').addClass(r.linkActiveClass)}else{e('a[href="'+s+'"]').removeClass(r.linkActiveClass)}})}e(r.smoothClass).click(function(){var n=e(this).attr("href");e("html, body").stop().animate({scrollTop:e(n).offset().top-t},r.timeSmooth);return false});e(window).scroll(function(){var o=e(window).scrollTop();if(o>=s){e(r.menuClass).addClass(r.stickClass);if(r.returnTop){e(r.returnClass).fadeIn()}}else{e(r.menuClass).removeClass(r.stickClass);if(r.returnTop){e(r.returnClass).fadeOut()}}if(r.activeMenu){e(r.anchorClass).each(function(){var s=e(this).attr("href");var u=e(s).offset().top;if(o>=u-t){e(r.anchorClass).removeClass(r.linkActiveClass);e('a[href="'+s+'"]').addClass(r.linkActiveClass)}else if(o+n==i){e(r.anchorClass).removeClass(r.linkActiveClass);e('a[href="'+s+'"]').addClass(r.linkActiveClass)}else{e('a[href="'+s+'"]').removeClass(r.linkActiveClass)}})}})})}})(jQuery)