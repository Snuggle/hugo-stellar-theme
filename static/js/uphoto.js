// First we'll grab all the images inside a post paragraph
let ims = document.querySelectorAll('.post-content p img')

// If ims === 0 lets not do anything
if (ims.length > 0) {

  // Now we'll loop through all of the images that were picked up
  // Note that I'm doing no real error handling, you might want to clean this up
  for (let i = 0; i < ims.length; i++) {

    // For each image we add the class name
	ims[i].className += "u-photo";
  }
}