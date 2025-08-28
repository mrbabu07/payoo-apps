const validPin = 1234;

// function to get values
function getInputValueNumber(id) {
  const inputField = document.getElementById(id);
  const inputFieldValue = inputField.value;
  const inputFieldValueNumber = parseInt(inputFieldValue);

  return inputFieldValueNumber;
}

function getInputValue(id) {
  const inputField = document.getElementById(id);
  const inputFieldValue = inputField.value;
  return inputFieldValue;
}

// function to get inner text
function getInnerText(id) {
  const element = document.getElementById(id);
  const elementValue = element.innerText;
  const elementValueNumber = parseInt(elementValue);

  return elementValueNumber;
}

// function to set inner text
function setInnerText(value) {
  const availableBalanceElement = document.getElementById("available-balance");
  availableBalanceElement.innerText = value;
}

// function to toggle 
function handleToggle(id){
    const forms = document.getElementsByClassName("form");
   
   for(const form of forms){
    form.style.display = "none";  
   }
   document.getElementById(id).style.display = "block"
}

// add money feature
document
  .getElementById("add-money-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    console.log("clicked the add money button");

    const bank = document.getElementById("bank").value;
    const accountNumber = document.getElementById("account-number").value;

    const amount = getInputValueNumber("add-amount");
    const pin = getInputValueNumber("add-pin");

    if (accountNumber.length < 11) {
      alert("Please Provide Valid Account Number");
      return;
    }

    if (pin !== validPin) {
      alert("please provide valid pin number");
      return;
    }

    const availableBalance = getInnerText("available-balance");
    console.log(availableBalance);

    const totalNewAvailableBalance = amount + availableBalance;

    setInnerText(totalNewAvailableBalance); // ✅ function use করা হলো
  });

// cash out money feature
document
  .getElementById("withdraw-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();

    const agentnumber = document.getElementById("agent-number").value;
    const pin = getInputValueNumber("withdraw-pin");

    if (agentnumber.length < 11) {
      alert("Please Provide Valid Number");
      return;
    }

    if (pin !== validPin) {
      alert("please provide valid pin number");
      return;
    }

    const amount = getInputValueNumber("withdraw-amount");
    const availableBalance = getInnerText("available-balance");
    const totalNewAvailableBalance = availableBalance - amount;
    console.log(totalNewAvailableBalance);

    setInnerText(totalNewAvailableBalance); // ✅ function use করা হলো
  });

// toggle feature
document.getElementById("add-button")
.addEventListener('click', function(event){
  handleToggle("add-money-parent")
});



document.getElementById("cash-out-btn")
.addEventListener("click", function (event) {
  handleToggle("cash-out-parent")
});

document.getElementById("transfer-btn")
.addEventListener("click", function (event) {
handleToggle("transfer-money-parent")
});

document.getElementById("get-bonus-btn")
.addEventListener("click", function (event) {

   handleToggle("bonus-money-parent")
});
