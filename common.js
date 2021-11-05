$(function() {
    //font
    (function(d) {
        var config = {
            kitId: 'pji1iqq',
            scriptTimeout: 3000,
            async: true
        },
        h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\bwf-loading\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='https://use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)
    })(document);

    //ファーストビューsp調節
    var windowW = parseInt($(window).innerWidth());
    if (windowW < 767) {
        var windowH = parseInt($(window).height());
        $('.mainVisual-sp').css('height', windowH);
    }

    //page top
    $(window).scroll(function(){
        var topH = parseInt($('.search').offset().top);
        var scroll = parseInt($(window).scrollTop());
        if (scroll > (topH - windowH)) {
            $('.pageUp').fadeIn();
        } else if (scroll < (topH - windowH)) {
            $('.pageUp').fadeOut();
        }
    });

    $('.pageUp').on('click', function(){
        $('body, html').animate({scrollTop: 0}, 700);
        return false;
    });
    //hamburger
    $('#hamburger').on('click', function(){
        $('span,.mainVisual_list').toggleClass('clicked');
    });
    //navColor_change
    $(window).scroll(function(){
        var topH_search = parseInt($('.search').offset().top);
        var topH_banner = parseInt($('.banner').offset().top);
        var navH = $('.mainVisual_list').height();
        var scroll = parseInt($(window).scrollTop());
        if (scroll >= topH_search - navH && scroll <= topH_banner - navH) {
            $('.mainVisual_list').addClass('mainVisual_list-blue');
            $('.mainVisual_list::after').addClass('.mainVisual_list-blue::after');
        } else {
            $('.mainVisual_list').removeClass('mainVisual_list-blue');
            $('.mainVisual_list::after').removeClass('.mainVisual_list-blue::after');
        }
    });
});