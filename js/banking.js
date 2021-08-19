
//function using for deposite and withdraw amount...
function getInputValue(inputId) {
    const inputField = document.getElementById(inputId);
    const inputAmountText = inputField.value;
    const amountValue = parseFloat(inputAmountText);
    // clear the deposit input field ...
    inputField.value = '';
    return amountValue;
}
//function using for update deposite and withdraw total...
function updateTotalField(totalFieldId, amount) {
    const totalElement = document.getElementById(totalFieldId);
    const totalText = totalElement.innerText;
    const previousTotal = parseFloat(totalText);
    totalElement.innerText = previousTotal + amount;
}
// current balance update...
function getCurrentBalnce() {
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    return previousBalanceTotal;
}
//function using for balance  and withdraw balance...
function updateBalance(amount, isAdd) {
    const balanceTotal = document.getElementById('balance-total');
    // const balanceTotalText = balanceTotal.innerText;
    // const previousBalanceTotal = parseFloat(balanceTotalText);
    const previousBalanceTotal = getCurrentBalnce();
    if (isAdd == true) {
        balanceTotal.innerText = previousBalanceTotal + amount;
    }
    else {
        balanceTotal.innerText = previousBalanceTotal - amount;
    }
}

// handle deposit button event...
document.getElementById('deposit-button').addEventListener('click', function () {
    //get the amount deposit....
    // const depositInput = document.getElementById('deposit-input');
    // const depositAmountText = depositInput.value;
    // const depositAmount = parseFloat(depositAmountText);
    const depositAmount = getInputValue('deposit-input');
    if (depositAmount > 0) {
        // get and update deposite total....
        // const depositTotal = document.getElementById('deposit-total');
        // const depositTotalText = depositTotal.innerText;
        // const previousDepositTotal = parseFloat(depositTotalText);
        // depositTotal.innerText = previousDepositTotal + depositAmount;
        updateTotalField('deposit-total', depositAmount);

        // update balance....
        // const balanceTotal = document.getElementById('balance-total');
        // const balanceTotalText = balanceTotal.innerText;
        // const previousBalanceTotal = parseFloat(balanceTotalText);
        // balanceTotal.innerText = previousBalanceTotal + depositAmount;
        updateBalance(depositAmount, true);

        // clear the deposit input field ...
        // depositInput.value = '';
    }
});


// handle withdraw event handler....
document.getElementById('withdraw-button').addEventListener('click', function () {
    //get the amountwithdraw....
    // const withdrawInput = document.getElementById('withdraw-input');
    // const withdrawAmountText = withdrawInput.value;
    // const withdrawAmount = parseFloat(withdrawAmountText);
    const withdrawAmount = getInputValue('withdraw-input');
    const currentBalance = getCurrentBalnce();

    if (withdrawAmount > 0 && withdrawAmount < currentBalance) {
        // get and update withdraw total....
        // const withdrawTotal = document.getElementById('withdraw-total');
        // const previousWithdrawTotalText = withdrawTotal.innerText;
        // const previousWithdrawTotal = parseFloat(previousWithdrawTotalText);
        // withdrawTotal.innerText = previousWithdrawTotal + withdrawAmount;
        updateTotalField('withdraw-total', withdrawAmount);


        // update balance and withdraw....
        // const balanceTotal = document.getElementById('balance-total');
        // const balanceTotalText = balanceTotal.innerText;
        // const previousBalanceTotal = parseFloat(balanceTotalText);
        // balanceTotal.innerText = previousBalanceTotal - withdrawAmount;
        updateBalance(withdrawAmount, false);

        // clear the withdraw input feild.....
        // withdrawInput.value = '';
    }
    if (withdrawAmount > currentBalance) {
        console.log('You can not withdraw ... more then your balance ')
    }
});