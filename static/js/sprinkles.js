/*!
 * Dynamically changing favicons with JavaScript
 * Works in all A-grade browsers except Safari and Internet Explorer
 * Demo: http://mathiasbynens.be/demo/dynamic-favicons
 */

// HTML5™, baby! http://mathiasbynens.be/notes/document-head
document.head = document.head || document.getElementsByTagName('head')[0];

function changeFavicon(src) {
	var link = document.createElement('link'),
		oldLink = document.getElementById('dynamic-favicon');
	link.id = 'dynamic-favicon';
	link.rel = 'shortcut icon';
	link.href = src;
	if (oldLink) {
		document.head.removeChild(oldLink);
	}
	document.head.appendChild(link);
}

function changeLogo(path) {
	document.getElementById("main-logo").src = path;
	document.getElementById("footer-logo").src = path;
	changeFavicon(path)
}

// Return the southern hemisphere season for a date
// If no date provided, uses current system date
function getSeason(d) {
	d = d || new Date();
	var mon = d.getMonth() + 1; // Adjust to be indexed from 1
	var day = d.getDate();
	var seasons = ['summer', 'autumn', 'winter', 'spring'];

	// Do silly seasons here
	if (mon == 2) {
		if (day >= 0 && day <= 10) {
			changeLogo("/images/sprinkles/vector/sprinkles-me.svg");
			return 'It is close to my birthday!';
		}
	}
	if (mon == 4) {
		if (day >= 0 && day <= 10) {
			changeLogo("/images/sprinkles/vector/sprinkles-easter.svg");
			return 'It is easter season!';
		}
	}
	if (mon == 10) {
		if (day == 31) {
			changeLogo("/images/sprinkles/vector/sprinkles-halloween-ghost.svg");
			return 'It is halloween today!';
		}
		if (day >= 13 && day <= 30) {
			changeLogo("/images/sprinkles/vector/sprinkles-halloween-ghost.svg");
			return 'It is the halloween season!';
		}
	}
	if (mon == 12) {
		if (day >= 13 && day <= 27) {
			changeLogo("/images/sprinkles/vector/sprinkles-christmas.svg");
			return 'It is the Christmas season!';
		}
		if (day >= 28 && day <= 31) {
			changeLogo("/images/sprinkles/vector/sprinkles-christmas.svg");
			return 'It will be New Year\'s day soon!';
		}
	}

	// If wasn't a silly season, do others
	mon = Math.floor((mon % 12) / 3);
	return seasons[mon];
}

console.log('Sprinkles: ' + getSeason()); // Currently it is summer


$(document).ready(function() {
	document.body.classList.add(getSeason());
});
