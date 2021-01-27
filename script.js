const  resultValue = document.getElementById('result');
const  numSelector = document.querySelectorAll('.operand');
console.log(numSelector);

const clearButton = document.getElementById('clear-button');
const negateButton = document.getElementById('negate-button');
const percentButton = document.getElementById('percent-button');
const operatorButtons = document.querySelectorAll('.operator');
const equalButton = document.getElementById('equalButton');
const dotOption = document.getElementById('dotOption');
equalButton.addEventListener('click',operate);
dotOption.addEventListener('click',addDot);
console.log(operatorButtons);
// numSelector[0].addEventListener('click',printNum);
let num1='';
let num2='';
let operatorAlreadyClicked = false;
let currentOperator ='';
let result=0;
let ans = 0;
for(i=0;i<numSelector.length;i++){
    numSelector[i].addEventListener('click',printNum);
    numSelector[i].addEventListener('click',printNumOnScreen);
}

for(i=0;i<operatorButtons.length;i++){
    operatorButtons[i].addEventListener('click',getOperator);
}
function printNumOnScreen(num){
    if(!operatorAlreadyClicked){
        console.log("Print Num on Screen clicked/n Operator already clicked:"+operatorAlreadyClicked);
        num1+=num.target.innerText;
        resultValue.textContent = displayControl(num1);
        console.log(num1);
        return;
    }
    else{
        console.log("Print Num on Screen clicked/n Operator already clicked:"+operatorAlreadyClicked);
        num2+=num.target.innerText;
        resultValue.textContent = displayControl(num2);
        console.log(num2);
        return;
    }
}
function printNum(num){
    console.log(num.target.textContent);
}
clearButton.addEventListener('click',function(){
    console.log('Clear button clicked');
    num1='';
    num2='';
    result=0;
    resultValue.textContent=result;
});
negateButton.addEventListener('click',function(){
    console.log('Negate button clicked');
    if(operatorAlreadyClicked){
        num2=-1*num2;
        resultValue.textContent = num2;
    }
    else{
        num1 = -1*num1;
        resultValue.textContent=num1;
    }
});
percentButton.addEventListener('click',function(){
    console.log('Percent Button clicked');
    if(operatorAlreadyClicked){
        num2=num2/100;
        resultValue.textContent = displayControl(num2);
    }
    else{
        num1 = num1/100;
        resultValue.textContent=displayControl(num1);
    }
});
// result = 80;
resultValue.textContent=result;


function getOperator(operatorButton){
    if(operatorAlreadyClicked){
        operate();
    }
    console.log(operatorButton.target.textContent);
    currentOperator = operatorButton.target.textContent;
    operatorAlreadyClicked = true;
}

function operate(){
    if(num2==''){
        ans = num1;
    }
    else{
        if(currentOperator=='+'){
            ans = add(Number(num1),Number(num2));
        }
        else if(currentOperator=='-'){
            ans = subtract(Number(num1),Number(num2));
        }
        else if(currentOperator==='*'){
            ans = multiply(Number(num1),Number(num2));
        }
        else if(currentOperator === '/'){
            if(num2!=='0'){
                ans=divide(Number(num1),Number(num2));
            }
            else{
                ans=0;
            }
        }
        else if(currentOperator=='^'){
            ans=Math.pow(Number(num1),Number(num2));
        }
    }
    console.log('Answer: '+ans);
    resultValue.textContent=displayControl(ans);
    result=ans;
    num1=String(result);
    num2='';
    currentOperator='';
    operatorAlreadyClicked=false;
}

function add(num1,num2){
    console.log(num1+num2);
    return num1+num2;
}

function subtract(num1,num2){
    return num1-num2;
}

function multiply(num1,num2){
    return num1*num2;
}

function divide(num1,num2){
    return num1/num2;
}

function addDot(){
    if(operatorAlreadyClicked){
        if(num2.includes('.')){
            console.log('num2 Already has a decimal point');
        }
        else{
            num2+='.';
            resultValue.textContent = displayControl(num2);
        }
    }
    else{
        if(num1.includes('.')){
            console.log('num1 Already has a decimal point');
        }
        else{
            num1+='.';
            resultValue.textContent = displayControl(num1);
        }
    }
}

function displayControl(num){
    return String(num).substring(0,10);
}