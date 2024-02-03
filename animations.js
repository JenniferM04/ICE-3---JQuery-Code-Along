/**
 * Jennifer Murphy
 * February 1, 2024
 */

console.log('animations.js loaded successfully')

// $('#jqueryheader').toggle(function(){
//     $(this).toggleClass("minus");
//     $(this).next().slideDown(1000, "easeOutBounce");
// }, function(){
//     $(this).toggleClass("minus");
//     $(this).next().slideUp(1000, "easeInBounce");
// })


// TODO: function fadeInOutTo()

function fadeInOutTo()
{
    // fade out - display none 3000 ms (red-box)
    $('.red-box').fadeOut(3000);

    // fade in- display to 1500 ms (red-box)
    $('.red-box').fadeIn(1500);

    // fade to 2000 ms with 30% opacity (green-box)
    $('.green-box').fadeTo(2000, .3);

    // fade to 1000 ms with 50% opacity (blue-box)
    $('.blue-box').fadeTo(1000, 0.5);

    // toggle the display (blue-box)
    // Go to none
    $('.blue-box').fadeToggle();

    //toggle the display (blue-box)
    // show but remember the 50% opacity from fadeTo
    $('.blue-box').fadeToggle();

}


// TODO: function hideElement()

function hideElement()
{
    // for the green box, toggle the display with hide, 1000 ms timeout
    $('.green-box').hide(1000);

    // for the green box, toggle the display with show, 1000 ms timeout
    $('.green-box').show(1000);

    // for the green box, slide up 1000 ms timeout
    $('.green-box').slideUp(1000);

    // for the green box, slide down 1000 ms timeout
    $('.green-box').slideDown(1000);

    // for the green box, toggle slide state 1000 ms timeout
    $('.green-box').slideToggle(1000);

    // for the green box, toggle slide state 1000 ms timeout
    $('.green-box').slideToggle(1000);
}


// TODO: function chainAnimations()

function chainAnimations()
{
    // for the blue box, fade to 50% opacity with 1000 ms timeout
    $('.blue-box').fadeTo(1000, 0.5);

    // for the green box, delay by 1000ms, then fade to 50% opacity with 1000 ms timeout (use chaining)
    $('.green-box').delay(1000).fadeTo(1000, 0.5);

    // for the red box, delay by 1000ms, then fade to 50% opacity with 1000 ms timeout, delay by 1000ms, 
    // fade to 100% opacity with 1000ms timeout, delay  1000ms, then fade out (use chaining)
    $('.red-box').delay(1000).fadeTo(1000, 0.5).delay(1000).fadeTo(1000, 1).delay(1000).fadeOut();
}

// testing functions
fadeInOutTo()
// hideElement() 
// chainAnimations() 

