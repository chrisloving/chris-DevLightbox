//Problem: User when clicking on image goes to a dead end
//Solution: Create an overlay with the large image - Lightbox

//example: var $body = $('body');
$(document).ready(function() {

//Capture Click event on image
//Orevent new page from opening on click

	$('#imageGallery a').on('click', function(event) {
		event.preventDefault();
		console.log('dont do it');
	})
});





