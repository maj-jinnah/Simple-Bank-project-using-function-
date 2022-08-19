document.getElementById('btn-withdraw').addEventListener('click', function () {
    const newWithdrawAmount = getValueFromInput('withdraw-field');
    if (isNaN(newWithdrawAmount)) {
        alert('Please, provide valid Number.');
        return;
    }
    const previousWithdrawAmount = getPreviousAmountValue('withdraw-total');
    const currentWithdrawTotal = newWithdrawAmount + previousWithdrawAmount;

    const previousAmountTotal = getPreviousAmountValue('balance-total');

    if (previousAmountTotal < newWithdrawAmount) {
        alert("You don't have enough money.")
        return;
    }

    setTextElementValueById('withdraw-total', currentWithdrawTotal);
    const newBalanceAmount = previousAmountTotal - newWithdrawAmount;

    setTextElementValueById('balance-total', newBalanceAmount);
})