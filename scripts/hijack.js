/*
Chapter 6 Handling Events with JavaScript
Silver Challenge: Link Hijack
The Chrome DevTools give you a lot of power for toying with pages that you visit. This next challenge
is to change all of the links on a search results page so that they do not go anywhere.
Go to your favorite search engine and search for “otters.” Open the DevTools to the console. With the
functions you wrote in Ottergram as a reference, attach event listeners to all of the links and disable
their default click functionality.
*/
(function disableLinks() {
    'use strict';
    document.addEventListener('click', function(event) {
        event.preventDefault();
    });
})();
