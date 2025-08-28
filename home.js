const validPin = 1234;
const transactionData = []

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

// function to toggle button 
function handleButtonToggle(id){
  const formBtns = document.getElementsByClassName("form-btn")
   
  for(const btn of formBtns){
    btn.classList.remove("border-[#0874f2]", "bg-[#0874f20d]")
    btn.classList.add("border-gray-300")
  }

  document.getElementById(id).classList.remove("border-gray-300")

  document.getElementById(id)
  .classList.add("border-[#0874f2]", "bg-[#0874f20d]")

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

    if(amount <=0){
      alert("invalid number")
      return;
    }

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

    setInnerText(totalNewAvailableBalance); 

    const data = {
      name:"Add Money",
      date:new Date().toLocaleDateString()
    }
    transactionData.push(data)

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

    if(amount <=0 || amount > availableBalance){
      alert("invalid amount")
      return;
    }

    const totalNewAvailableBalance = availableBalance - amount;
    console.log(totalNewAvailableBalance);

    setInnerText(totalNewAvailableBalance); // 

    const data = {
      name:"Cash Out",
      date:new Date().toLocaleDateString()
    }
    transactionData.push(data)

  });

  document.getElementById("transaction-btn").addEventListener("click", function() {
  const transactionContainer = document.getElementById("transaction-container");
  transactionContainer.innerText =""

  for (const data of transactionData) {
    const div = document.createElement("div");
    div.innerHTML = `
      <div class="p-3  bg-white rounded-xl flex justify-between items-center mt-3">
        <div class="flex items-center">
          <div class="p-3 rounded-full bg-gray-100">
            <img src="./assets/wallet1.png" alt="">
          </div>
          <div class="ml-3">
            <h1>${data.name}</h1>
            <p>${data.date}</p>
          </div>
        </div>
        <i class="fa-solid fa-ellipsis-vertical"></i>
      </div>
    `;
    transactionContainer.appendChild(div);
  }
});


// toggle feature
document.getElementById("add-button")
.addEventListener('click', function(event){
  handleToggle("add-money-parent")

  handleButtonToggle("add-button")
});



document.getElementById("cash-out-btn")
.addEventListener("click", function (event) {
  handleToggle("cash-out-parent")

   handleButtonToggle("cash-out-btn")

});

document.getElementById("transfer-btn")
.addEventListener("click", function (event) {
handleToggle("transfer-money-parent")

 handleButtonToggle("transfer-btn")
});

document.getElementById("get-bonus-btn")
.addEventListener("click", function (event) {

   handleToggle("bonus-money-parent")

    handleButtonToggle("get-bonus-btn")
});

document.getElementById("bill-btn")
.addEventListener("click", function (event) {

   handleToggle("pay-bill-parent")

    handleButtonToggle("bill-btn")
});

document.getElementById("transaction-btn")
.addEventListener("click", function (event) {

   handleToggle("transaction-parent")

    handleButtonToggle("transaction-btn")
});
