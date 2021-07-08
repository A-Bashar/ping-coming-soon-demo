var button = document.getElementById("signup-button");
var emailBox = document.getElementById("email");
var errorText = document.getElementById("error-text");
var errorStatus = false;

button.addEventListener("click", ()=>{
	var re = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
	if (re.test(emailBox.value)) {
		button.value="Subscribed!";
		if (errorStatus) {
			document.documentElement.style.setProperty("--text-box-color","hsl(223, 100%, 88%)");
			errorText.style.setProperty("opacity","0");
		}
	}
	else {
		document.documentElement.style.setProperty("--text-box-color","var(--error-color)");
		errorText.style.setProperty("opacity","1");
		errorStatus = true;
	}
})