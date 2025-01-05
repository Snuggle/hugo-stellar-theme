const setBg = () => {
	a = document.getElementsByClassName("card")
	let colors = ["#DCCFE0", "#F3E7EB", "#F9F3F5", "#F6F3F7"];


	for (var i in a) {
		const randomColor = colors[Math.floor(Math.random() * colors.length)];

		a[i].style.background = randomColor;
		console.log("Done" + i + randomColor)
	}
  }
  
setBg();