jQuery-Onepage
==============
This plugin will allowed you to create a smooth one page design.

- Use a class for your menu and set his name properly. (default: ".mainmenu").
- Add a sticky class in your CSS to make the menu stick at the top of the page.
- For every link that have an anchor, insert the proper class (.smoothLink is the default class)
- You can set a timing for you smoothScroll duration (default: 800ms)
- You can use a returnTop button by setting 'returnTop' as true.
- Same for the highlight menu by setting 'activeMenu' as true. Don't forget to add the "anchor" class on every menu links that target an anchor.

This will call the plugin:
  >`$(document).jqueryOnepage({   
        'returnTop':true,  
        'activeMenu':true  
    }  
  );`
  
others options:
--------
- `'menuClass' : '.mainmenu',` //this is the class of your main menu.
- `'stickClass' : 'stick',` //change the name of your sticky class (without dot or #). You'll need to stylise it in a certain way to make it work.
- `'smoothClass' : '.smoothLink',` //Add this class for every links you want to smooth. (don't forget the related anchor)
- `'timeSmooth' : 800,` //Change the duration of the smoothscroll
- `'returnTop' : false,` //set true if you want a returnTop button appears after scrolling a bit.
- `'returnClass' : 'a.returntop',` //if returnTop is true, add your sylized class for a personnal returnTop button
- `'activeMenu' : false, //set true if you want a highlight class to show to visitor where they currently are in the page.
- `'linkActiveClass' : 'active',` //add your class (without dot or #) for a sylized highlight class.
- `'anchorClass' : '.anchor'`//add this class or change the name but you'll need to add this for every anchor link on your main menu for highlighting them.


Look at the really sobre demo page, maybe that will help you to install this plugin.      
  
  
