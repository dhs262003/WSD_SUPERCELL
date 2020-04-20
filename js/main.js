function clicked() {

	var user = document.getElementById('username');
	var pass = document.getElementById('password');
	
	var coruser = "Dhruvshah";
	var corpass = "1991042";
	
	if(user.value == coruser) {
	
		if(pass.value == corpass) {
		
			window.alert("You are logged in as " + user.value);
			window.open("../Project/index.html");
		
		} else {
		
			window.alert("Incorrect username or password!");
		
		}
	
	} else {
	
			window.alert("Incorrect username or password!");
	
	}

}
