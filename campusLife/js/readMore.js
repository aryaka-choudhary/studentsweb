function messReadMore() {
    var dots = document.getElementById("messDots");
    var moreText = document.getElementById("messMore");
    var btnText = document.getElementById("messClick");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more"; 
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less"; 
      moreText.style.display = "inline";
    }
  }

  function hostelReadMore() {
    var dots = document.getElementById("hostelDots");
    var moreText = document.getElementById("hostelMore");
    var btnText = document.getElementById("hostelClick");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more"; 
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less"; 
      moreText.style.display = "inline";
    }
  }

  function ciReadMore() {
    var dots = document.getElementById("ciDots");
    var moreText = document.getElementById("ciMore");
    var btnText = document.getElementById("ciClick");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more"; 
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less"; 
      moreText.style.display = "inline";
    }
  }

// function readMore(event) {
// 	var btnText = event.target;
// 	console.log(btnText);
// 	var moreText = btnText.previousElementSibling;
// 	var dots = moreText.previousElementSibling;
// 	if (moreText.style.display === "none") {
// 	  dots.style.display = "none";
// 	  btnText.innerHTML = "read less";
// 	  moreText.style.display = "inline";
// 	} else {
// 	  dots.style.display = "inline";
// 	  btnText.innerHTML = "read more";
// 	  moreText.style.display = "none";
// 	}
//   }
