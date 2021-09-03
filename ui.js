
document.querySelector("#firstCurrency").addEventListener("change",function(e) {
    document.querySelector("#outputFirst").textContent = e.target.value
})

document.querySelector("#secondCurrency").addEventListener("change",function(e) {
    document.querySelector("#outputSecond").textContent = e.target.value
})

