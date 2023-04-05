// Display number in text box

function displayNum(num)
{
    result.value+=num;
}


// Clear text box

function clearBox()
{
    result.value="";
}

//  Evaluate expression

function evaluateexpression(){
    expression=result.value;
    output=eval(expression);
    result.value=output;
}


//remove last item from the text box 

function removelast(){
    result.value=result.value.slice(0,-1);
}