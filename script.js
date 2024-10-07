var form = document.getElementById('form');
var username = document.getElementById('username');
var email = document.getElementById('email');
var phno = document.getElementById('phno');
var password = document.getElementById('password');
var password2 = document.getElementById('password2');

form.addEventListener('submit', e => {
	e.preventDefault();
	
	checkInputs();
});

function checkInputs() {
	// trim to remove the whitespaces
	let usernameValue = username.value.trim();
	var emailValue = email.value.trim();
    var phnoValue = phno.value.trim();
	var passwordValue = password.value.trim();
	var password2Value = password2.value.trim();
	
	if(usernameValue === '') {
		setErrorFor(username, 'Name cannot be blank');
	} else if (usernameValue.length < 5) {
        setErrorFor(username, 'Name cannot be less than 5 characters');
    } else {
		setSuccessFor(username);
	}
	
	if(emailValue === '') {
		setErrorFor(email, 'Email cannot be blank');
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'Enter correct email');
	} else {
		setSuccessFor(email);
	}

    if(phnoValue === '') {
		setErrorFor(phno, 'Phone number cannot be blank');
	} else if (phnoValue === '123456789') {
		setErrorFor(phno, 'Not a valid Phone number');
	} else if (phnoValue.length < 10) {
        setErrorFor(phno, 'Not a valid Phone number');
    } else {
		setSuccessFor(phno);
	}
	
	if(passwordValue === '') {
		setErrorFor(password, 'Password cannot be blank');
	} else if (passwordValue === 'password' || passwordValue === usernameValue) {
        setErrorFor(password, 'Password is not strong');
    } else if(passwordValue.length < 8) {
        setErrorFor(password, 'Password cannot be less than 8 characters');
    } else {
		setSuccessFor(password);
	}
	
	if(password2Value === '') {
		setErrorFor(password2, 'Password cannot be blank');
	} else if(passwordValue !== password2Value) {
		setErrorFor(password2, 'Passwords does not match');
	} else{
		setSuccessFor(password2);
	}
}

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}
	
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
