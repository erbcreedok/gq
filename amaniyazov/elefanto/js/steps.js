var last_option = 0;
var options = document.getElementsByClassName('steps-item');
function select_option(e, index) {
	options[last_option].style.borderColor = '#fff';
	last_option = index;
	options[last_option].style.borderColor = 'red';
}


var menu = false;

function toggleMenu() {
	if(!menu) {
		document.getElementsByClassName('link-item-dropdown')[0].style.display = 'block';
	} else {
		document.getElementsByClassName('link-item-dropdown')[0].style.display = 'none';
	}

	menu = !menu;
}