function debounce (variable, delay){
	var IDtime;
	return function () {
		clearTimeout(IDtime);
		IDtime = setTimeout(variable, delay);
	}
}

let iterator = 0;

function callback() {
	iterator++;
	printIteratorValue();
}

function printIteratorValue() {
	console.log('Iterator value ', iterator);
}

var debouncedCallback = debounce(callback, 777);

debouncedCallback();
debouncedCallback();
debouncedCallback();
debouncedCallback();
