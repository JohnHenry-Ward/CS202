$(document).ready(function(){


    // Selector: element, id, class, multiple, css or jQuery

    // syntax: $('selector').function();
    // $('p').hide();
    // $('p, h2, .heading1').hide();
    // $('#list li:last').hide();

    // Events: click, dblclick, keydown, load, mouseover
    $('.btn1').click(function(){
        $('.para2').hide();
    });

    $('.btn2').click(function(){
        $('.para2').show();
    });

    $('.btn3').click(function(){
        $('.para2').toggle();
    });

    // Parameters: fast, slow, 2000 (2 seconds)
    $('.btn4').click(function(){
        $('.para2').fadeToggle(3000);
    });

    // Animation

    // $('.box').mousedown(function(){
    //     $('.box').animate({
    //         'left':'300px',
    //         'opacity':'0.5'
    //     }, 2000);
        
    // })

    $('.box').mouseenter(function(){
      $(this).animate({
          'top':'300px'
      }, 2000);  
    })

     $('.box').mouseout(function(){
         $(this).animate({'top':'0'},2000);
     })



    

});