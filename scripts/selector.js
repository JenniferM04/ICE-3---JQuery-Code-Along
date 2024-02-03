/**
 * Jennifer Murphy
 * February 2, 2024
 */

console.log("selectors.js loaded")
$(function()
{
    console.log("DOM is ready");
});

/**
 * 
 * @param {*} element
 */
function highlight(element)
{
    element.css('background-color', "#fcf30040")
}

function cssSelectors()
{
    // Updating by tag (<p></p>)
    $('p').css('background-color', "#2a9d8f");

    // Updating by class (class="red-box")
    $('.red-box').css('background-color', "#2a9d8f");

    // Updating by id (id="list")
    $('#list').css('font-size', '40px');

    $('li:odd').css('background-color', "#fcf30040");
}

function traversingTheDOM()
{
    // $('#list').prev().css('background-color', "#2a9d8f");
    // $('#list').next().css('background-color', "#2a9d8f");
    // $('#list').prev().next().css('background-color', "#2a9d8f"); // wouldn't do this, this just updates the list

    $('#list').find('li').css('background-color', "#2a9d8f");

    // Traverse up one level
    $('#list').parent('div').css('font-size', '24px');

    // Traverse all the way up, through all parents, grandparents, etc. to the body
    $('#list').parents('body').css('font-size', '24px');
}




