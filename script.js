let input = document.getElementById("display_point");
let buttons = document.querySelectorAll(".operator");

let expression = ""; 
let shouldEvaluate = false;

buttons.forEach(button => {
    button.addEventListener("click", (e) => {

        let buttonText = e.target.getAttribute("value");
    
        if (e.target.innerHTML === 'C') {
            expression = "";
            input.value = expression;
        } else if (e.target.innerHTML === 'CE') {
            expression = expression.substring(0, expression.length - 1);
            input.value = expression;
        } else {
            
            switch(buttonText){
                case "=":
                    try {
                        expression = eval(expression);
                        input.value = expression;
                        break;
                    } catch (error) {
                        input.value = "Error";
                        break;
                    }
                case "x²":
                    expression += "**2";
                    input.value = expression;
                    break;
                case "1/x":
                    expression += "1/";
                    input.value = expression;
                    break;
                case "√":
                    expression = `Math.sqrt(${expression})`;
                    input.value = expression;
                    break;
                case "/":
                        expression += "/";
                        input.value = expression;
                        break;
                case "x":
                        expression += "*";
                        input.value = expression;
                        break;
                case "add":
                        expression += "+";
                        input.value = expression;
                        break;
                case "sub":
                        expression += "-";
                        input.value = expression;
                        break;
                case "%":
                        expression += "%";
                        input.value = expression;
                        break;
                default :
                        expression += e.target.innerHTML;
                        input.value = expression;
            }
            shouldEvaluate = true;

        }
    });
});
