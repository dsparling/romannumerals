/*
 * jQuery romannumerals - Roman Numberl converter  plugin - v 1.0.0
 * http://plugins.jquery.com/project/romannumerals
 *
 * Copyright (c) 2007-2008 Doug Sparling <http://www.dougsparling.com>
 * Licensed under the MIT License:
 *   http://www.opensource.org/licenses/mit-license.php
 */
(function($) {

  $.fn.romannumerals = function(options) {
    var version = '1.0.0';

    // options
    var opts = $.extend({}, $.fn.romannumerals.defaults, options);
         
    // iterate convert each matched element
    return this.each(function() {
      $this = $(this);
      // build element specific options
      var o = $.meta ? $.extend({}, opts, $this.data()) : opts;
      // update element styles
      $this.css({
        fontFamily: o.fontFamily,
        fontSize: o.fontSize,
        color: o.foreground,
        backgroundColor: o.background
      });
      var number = $this.html();
      // call arabicToRoman function
      var romanNumber = $.fn.romannumerals.arabicToRoman(number);
      $this.html(romanNumber);
    });
  };
       
  //
  // define and expose arabicToRoman function (4999 max)
  // http://groups.google.com/group/pl.comp.lang.javascript/msg/c8991a94f77c98ce
  $.fn.romannumerals.arabicToRoman = function(N,s,b,a,o,t) {
    for(s=b='',a=5;N;b++,a^=7) {
      for(o=N%a,N=N/a^0;o--;) {
        s='IVXLCDM'.charAt(o>2?b+N-(N&=~1)+(o=1):b)+s;
      }
    }
    return s
  } 

  //
  // define and expose arabicToRoman function
  // http://blog.stevenlevithan.com/archives/javascript-roman-numeral-converter
  $.fn.romannumerals.arabicToRoman2 = function(N,s,b,a,o,t) {
    t=N/1e3|0;N%=1e3;
    for(s=b='',a=5;N;b++,a^=7) {
      for(o=N%a,N=N/a^0;o--;) {
        s='IVXLCDM'.charAt(o>2?b+N-(N&=~1)+(o=1):b)+s;
      }
    }
    return Array(t+1).join('M')+s;
  }

  //
  // plugin defaults
  //
  $.fn.romannumerals.defaults = {
    fontFamily: '',
    fontSize: '',
    foreground: '',
    background: ''
  };
})(jQuery);

/*
 * http://en.wikipedia.org/wiki/Roman_numerals
 * http://blog.stevenlevithan.com/archives/javascript-roman-numeral-converter
 * http://groups.google.com/group/pl.comp.lang.javascript/msg/c8991a94f77c98ce
 * http://ostermiller.org/calc/roman.html
 * http://www.ivtech.com/roman/faq.php
 */ 
