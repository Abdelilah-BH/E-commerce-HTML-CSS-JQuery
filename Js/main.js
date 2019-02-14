// global $,alert ,console
$(function()
{
    'use strict';
    $('.form-search').each(function () { 
         $(this).css('margin-top', ($('.header-center').height() - $('.txt-search').height()) / 2);
    });
    $('.panel').each(function () { 
        $(this).css('margin-top', ($('.header-center').height() - $('.btn-panel').height()) / 2);
   });
});
