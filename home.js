const validPin = 1234;
// add money feature 
document.getElementById("add-money-btn")
.addEventListener('click', function(event){
    event.preventDefault()
    console.log('clicked the add money button')

    const bank = document.getElementById("bank").value
    const accountNumber = document.getElementById("account-number").value

    const amount = parseInt (document.getElementById("add-amount").value)
    const pin = parseInt (document.getElementById("add-pin").value)

    if(accountNumber.length < 11 ){
        alert('Please Provide Valid Account Number')
        return;
    }

    if(pin !== validPin){
        alert('please provide valid pin number')
        return;
    }

    const availableBalance = parseInt (document.getElementById("available-balance").innerText)
    console.log(availableBalance);

    const totalNewAvailableBalance = amount + availableBalance;

    document.getElementById("available-balance").innerText = totalNewAvailableBalance;

})

// cash out money feature 


document.getElementById("withdraw-btn")
.addEventListener("click", function(event){
    event.preventDefault()

    const agentnumber = document.getElementById("agent-number").value
    const pin = parseInt (document.getElementById("withdraw-pin").value)
    
     if(agentnumber.length < 11 ){
        alert('Please Provide Valid  Number')
        return;
    }

    if(pin !== validPin){
        alert('please provide valid pin number')
        return;
    }

    const amount = parseInt(document.getElementById("withdraw-amount").value)
    const availableBalance = parseInt (document.getElementById("available-balance").innerText)
    
    const totalNewAvailableBalanceavailableBalance = availableBalance - amount
    console.log(totalNewAvailableBalanceavailableBalance)

    document.getElementById("available-balance").innerText = totalNewAvailableBalanceavailableBalance; 

})

// toggle feature 
document.getElementById("add-btn")
.addEventListener("click", function(){
document.getElementById("cash-out-parent").style.display = "none"
document.getElementById("add-money-parent").style.display = "block"
})

document.getElementById("cash-out-btn")
.addEventListener("click", function(){
document.getElementById("add-money-parent").style.display = "none"
document.getElementById("cash-out-parent").style.display = "block"

})