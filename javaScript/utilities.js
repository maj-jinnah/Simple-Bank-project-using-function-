function getValueFromInput(inputField){
    const inputAmountField = document.getElementById(inputField);
    const inputAmountFieldString = inputAmountField.value;
    const inputAmount = parseFloat(inputAmountFieldString);
    inputAmountField.value = '';

    return inputAmount;
}

function getPreviousAmountValue(inputField){
    const  previousAmountElement = document.getElementById(inputField);
    const previousAmountString = previousAmountElement.innerText;
    const previousAmount = parseFloat(previousAmountString);

    return previousAmount;
}

function setTextElementValueById(elementId, elementValue){
    const elementField = document.getElementById(elementId);
    elementField.innerText = elementValue;
}
