let keys = document.querySelectorAll('.btn');
let operators = ['+', '-', 'x', '÷', '^'];
let decimalAdded = false;

// loop through all keys
for(let i = 0; i < keys.length; i++) {
  //add onclick event to the keys
	keys[i].onclick = function(elem) {
		let input = document.querySelector('.input');
		let value = input.innerHTML;
		let text = this.innerHTML;
    
		// If AC key is pressed, erase everything
		if(text == 'AC') {
			input.innerHTML = '';
			decimalAdded = false;
		}

        //If square of x is pressed, take the square of the value
        else if(keys[i].innerHTML == 'x<sup>2</sup>') {
            let equation = value;
            input.innerHTML = Math.pow(equation, 2);
		} 
        else if (keys[i].innerHTML == 'DE') {
            let string = value;
            string = string.slice(0, string.length - 1);
            input.innerHTML = string;
          }
		
		// If eval key is pressed, calculate and display the result
		else if(text == '=') {
			let equation = value;
			let lastChar = equation[equation.length - 1];
     	
			// Use regex to replace all instances of x, ÷, ^ with *, / and **
			equation = equation.replace(/x/g, '*').replace(/÷/g, '/').replace(/\^/g, '\*\*');
			
			//Use regex to remove decimals from the end of an equation
			if(operators.indexOf(lastChar) > -1 || lastChar == '.')
				equation = equation.replace(/.$/, '');
      
			// use javascript's eval function to get the result
      
			if(equation)
				input.innerHTML = eval(equation);	
			    decimalAdded = false;
		}
		
		// Javascript checks

        // No two operators should be added consecutively.		
		else if(operators.indexOf(text) > -1) {
			// Get the last character from the equation
			let lastChar = value[value.length - 1];
			
			if(value != '' && operators.indexOf(lastChar) == -1) 
				input.innerHTML += text;
			
			else if(value == '' && text == '-') 
				input.innerHTML += text;
			
			// Replace the last operator (if exists) with the newly pressed operator
			if(operators.indexOf(lastChar) > -1 && value.length > 1) {
				input.innerHTML = value.replace(/.$/, text);
			}
			decimalAdded =false;
		}
        // allow decimal point input
		
		else if(text == '.') {
			if(!decimalAdded) {
				input.innerHTML += text;
				decimalAdded = true;
			}
		}
		
		// if any other key is pressed, just append it after the decimal
		else {
			input.innerHTML += text;
		}
		
		// prevent page jumps
		elem.preventDefault();
	} 
}


document.onkeydown = function(event){
    let key_press = String.fromCharCode(event.keyCode);
    let key_code = event.keyCode;
    let input = document.querySelector('.input');
    let equation = input.innerHTML;
    equation = equation.replace(/x/g, '*').replace(/÷/g, '/').replace(/\^/g, '\*\*');

    // Targetting each number
    if ((key_press == 1 && event.shiftKey == false) || (key_code == 97 && event.shiftKey == false)){
        input.innerHTML += 1;
    }
    if ((key_press == 2 && event.shiftKey == false) || (key_code == 98 && event.shiftKey == false)){
        input.innerHTML += 2;
    }
    if ((key_press == 3 && event.shiftKey == false) || (key_code == 99 && event.shiftKey == false)){
        input.innerHTML += 3;
    }
    if ((key_press == 4 && event.shiftKey == false) || (key_code == 100 && event.shiftKey == false)){
        input.innerHTML += 4;
    }
    if ((key_press == 5 && event.shiftKey == false) || (key_code == 101 && event.shiftKey == false)){
        input.innerHTML += 5;
    }
    if ((key_press == 6 && event.shiftKey == false) || (key_code == 102 && event.shiftKey == false)){
        input.innerHTML += 6;
    }
    if ((key_press == 7 && event.shiftKey == false) || (key_code == 103 && event.shiftKey == false)){
        input.innerHTML += 7;
    }
    if ((key_press == 8 && event.shiftKey == false) || (key_code == 104 && event.shiftKey == false)){
        input.innerHTML += 8;
    }
    if ((key_press == 9 && event.shiftKey == false) || (key_code == 105 && event.shiftKey == false)){
        input.innerHTML += 9;
    }
    if ((key_press == 0 && event.shiftKey == false) || (key_code == 96 && event.shiftKey == false)){
        input.innerHTML += 0;
    }
    if ((input.innerHTML != '' && key_code == 110) || (input.innerHTML != '' && key_code == 190)){
        input.innerHTML += '.';
    }

    // Targetting each operator
    if ((input.innerHTML != '' && key_code == 187 && event.shiftKey) || (input.innerHTML != '' && key_code == 107)){
        input.innerHTML += '+';
    }
    if ((key_code == 189 && event.shiftKey == false) || (key_code == 109 && event.shiftKey == false)){
        input.innerHTML += '-';
    }
    if ((input.innerHTML != '' && key_code == 56 && event.shiftKey) || (input.innerHTML != '' && key_code == 106)){
        input.innerHTML += '*';
    }
    if ((input.innerHTML != '' && key_code == 191 && event.shiftKey == false) || (input.innerHTML != '' && key_code == 111)){
        input.innerHTML += '/';
    }
    if (input.innerHTML != '' && key_code == 54 && event.shiftKey){
        input.innerHTML += '^';
    }

    // On pressing the eval key
    if ((key_code == 13) || (key_code == 187 && event.shiftKey == false)){
        input.innerHTML = eval(equation);
    }

    // On pressing backspace
    if(key_code==8 || key_code==46) {
        let string = input.innerHTML;
        string = string.slice(0, string.length - 1);
        input.innerHTML = string;
    }
}

