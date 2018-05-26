//Find all inputs in current page, store in object/array

var inputs = document.querySelectorAll("input, textarea, select > option");

//insert value to all inputs
function inject(payload) {
    inputs.forEach(
        function(currentValue, currentIndex, listObj) {
            if(currentValue.type != "submit"){
            currentValue.value = payload
        	}
        },
    )
};

//testing
inject('xxxxxx');