

document.querySelector("#amount").addEventListener("change",process)
document.querySelector("#firstCurrency").addEventListener("change",process)
document.querySelector("#secondCurrency").addEventListener("change",process)


function process(e) {
    amount = document.querySelector("#amount").value
    firstCurrency = document.querySelector("#firstCurrency").value
    secondCurrency = document.querySelector("#secondCurrency").value
    if (amount > 0) {
        Currency.translate(firstCurrency,secondCurrency,amount).then(r => {
            currency = JSON.parse(r).rates[secondCurrency].rate
            console.log(amount,currency);
            document.querySelector("#outputResult").value = amount * currency
        })
    }
}

