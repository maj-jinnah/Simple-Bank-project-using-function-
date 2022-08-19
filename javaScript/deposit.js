document.getElementById('btn-deposit').addEventListener('click', function(){
    const newDepositAmount = getValueFromInput('deposit-field');

    if(isNaN(newDepositAmount)){
        alert('Please, provide a valid number.')
        return;
    }

    const previousDepositAmount = getPreviousAmountValue('deposit-total');

    const currentDepositTotal = newDepositAmount + previousDepositAmount;
    setTextElementValueById('deposit-total', currentDepositTotal);

    const previousBalanceAmount = getPreviousAmountValue('balance-total');
    const newBalanceAmount = previousBalanceAmount + newDepositAmount;
    setTextElementValueById('balance-total', newBalanceAmount);
})