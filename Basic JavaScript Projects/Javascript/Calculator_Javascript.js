//Creates an object to keep track of values.
const Calculator = {
    Display_Value: '0', //On what the calculator screen.
    First_Operand: null, //The first operand for any expression, we set it to null for now.
    Wait_Second_Operand: false, //The second operand has been inputted by the user.
    operator: null, //This will keep the operator, we set it to null for now.
}

//Function below makes all key values in clicked on.
function Update_Display() {
    console.log("inside update display...")
    const Display = document.querySelector('.calculator-screen');
    //The element that will show/operate to show and hide Display_Value
    //On screen, the calculator.
    if (Calculator.Wait_Second_Operand === true && Calculator.First_Operand == null) {
        Calculator.Display_Value = '0';
    }
    Display.value = Calculator.Display_Value;
    //This overwrites Display_Value if the current value is
    //Whatever was and will be.
    //Calculator.Display_Value = Display.value === '' ? 'right' : Display.value = right;
}

//Function below decides points.
function Input_Decimal(dot) {
    //This makes the second DECIMAL clickable if the second point doesn't
    //exist.
    if (Calculator.Wait_Second_Operand === true) {
        Calculator.Display_Value = '0.';
        Calculator.Wait_Second_Operand = false;
        //This will overwrite the Display_Value if the user set a decimal point
        //We want to add a decimal point.
    }
    Calculator.Display_Value += dot;
}

//This section handles operators
function Handle_Operator(Next_Operator) {
    console.log(JSON.stringify(Calculator));
    const { First_Operand, Display_Value, operator } = Calculator;
    //Here we grab the Display_Value and convert the current result to
    //floating point so we can make sure that the number.
    //Calculator.First_Operand if it doesn't already exist.

    const Value_Of_Input = parseFloat(Display_Value);

    if(Value_Of_Input != 0 && Calculator.First_Operand != null){
        Calculator.Wait_Second_Operand = false;
    } else {
        Calculator.Wait_Second_Operand = true;
    }

    //When first operator doesn't exist and Calculator.First_Operand is true,
    //This grabs the current value and stores the function.
    if (operator && Calculator.Wait_Second_Operand) {
        Calculator.operator = Next_Operator;
        return;
    }

    if (Calculator.First_Operand == null) {
        Calculator.First_Operand = Value_Of_Input;
        //If current inputed value + operator already exists
    } else if (operator) {
        const value = First_Operand || 0;
        //commenting const here because result value is intended to change for format conversions
        //const result = Perform_Calculation[operator](value, Value_Of_Input);

        //Here we have fixed operand inputed to perform for the operator
        //If the operator exist.
        //Important for mathematical order and the function that
        let result = Perform_Calculation[operator](value, Value_Of_Input);

        //Here we add a fixed amount of numbers after the decimal.
        result = Number(result).toFixed(9);
        //We set new fixed values.
        result = parseFloat(result);

        Calculator.Display_Value = `${result}`;
        Calculator.First_Operand = parseFloat(result);
    }
    //wait for second operand should be set based on whether currently there is a digit in display
    //and incoming value of input, means two opearands, no need to wait for second one
      Calculator.operator = Next_Operator;
}

// Performs Calculation = {
//values are coming as strings, so convert them to number before performing 
//arithmetic operations so 7 plus 7 will be 14 instead of 77
const Perform_Calculation = {
    '/': (First_Operand, Second_Operand) => Number(First_Operand) / Number(Second_Operand),
    '*': (First_Operand, Second_Operand) => Number(First_Operand) * Number(Second_Operand),
    '+': (First_Operand, Second_Operand) => Number(First_Operand) + Number(Second_Operand),
    '-': (First_Operand, Second_Operand) => Number(First_Operand) - Number(Second_Operand),
    '=': (First_Operand, Second_Operand) => Number(Second_Operand)
};

function Calculator_Reset() {
    Calculator.First_Operand = '';
    Calculator.Display_Value = '0';
    Calculator.Wait_Second_Operand = false;
    Calculator.operator = null;
}

//This function updates the calculator screen with the contents of Display_Value
function Input_Digit(Digit) {
    console.log("inside input digit...")
    //set the selected digit to display, default is set to 0
    // the code at 116 reads from default, if we don't set here then the number buttons
    //won't work
    Calculator.Display_Value = Digit;
    if(Calculator.First_Operand == null){
        Calculator.First_Operand = Digit;
    
    }
    //Here we get the calculator-screen class to target the
    //inputs to the div element.
    const display = document.querySelector('.calculator-screen');
    display.value = Calculator.Display_Value;
}

Update_Display();

//This section monitors button clicks
const keys = document.querySelector('.calculator-keys');
keys.addEventListener('click', (event) => {
    //The target variable is an object that represents the element
    //that was clicked.
    const { target } = event;
    //If the target isn't clicked or is not a button, exit the function.
    if (!target.matches('button')) {
        return;
    }

    if (target.classList.contains('operator')) {
        Handle_Operator(target.value);
        Update_Display();
        return;
    }

    if (target.classList.contains('decimal')) {
        Input_Decimal(target.value);
        Update_Display();
        return;
    }

    //Here this C clears all inputs from the calculator screen.
    if (target.classList.contains('all-clear')) {
        Calculator_Reset();
        Update_Display();
        return;
    }

    Input_Digit(target.value);
    Update_Display();
});