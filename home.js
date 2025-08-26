document.getElementById("add-money-btn")
.addEventListener('click', function(event){
    event.preventDefault()
    console.log('clicked the add money button')

    const bank = document.getElementById("bank").value
    const accountNumber = document.getElementById("account-number").value

    const amount = parseInt (document.getElementById("add-amount").value)
    const pin = document.getElementById("add-pin").value

    const availableBalance = parseInt (document.getElementById("available-balance").innerText)
    console.log(availableBalance);

    const totalNewAvailableBalance = amount + availableBalance;

    document.getElementById("available-balance").innerText = totalNewAvailableBalance;

})