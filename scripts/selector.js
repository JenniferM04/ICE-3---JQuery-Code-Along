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

function filtering()
{
    $('#list').find('li').filter(':even').css('background-color', "#2a9d8f");

    // long function of the shortcut .filter(':even')
    $('#list').find('li').filter(function (i) 
    {
        return i % 2 === 0;
    }).css('background-color', "red");
}


function addReplaceRemove()
{
    $('ul#list li:first').append($("<ul><li>I'm going to be the last item of the first sub-list</li></ul>"));
    // add to top
    $('ul#list').prepend($("<li>Prepend</li>"));

    // use after to add elements after another
    $('.red-box').after("<div class=\"red-box new-box\">New Red box</div>");

    let newText = 'Last night, Darth Vader came down from the planet Vulcan.';
    $('p.grumpy').replaceWith(`<p>${newText}</p>`);

}

// cssSelectors();
// traversingTheDom();
// filtering();
// addReplaceRemove();



