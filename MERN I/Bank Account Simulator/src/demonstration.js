import { createAccount, feeCalculator } from "./accfactory.js";

console.log(" BANK ACCOUNT SIMULATOR STARTED \n");

// Low Balance Callback

function lowBalanceAlert(balance) {
  console.log("Low Balance Alert! Current balance:", balance);
}

// Create Account

const savings = createAccount("savings", {
  owner: "Ali",
  balance: 1000,
  interestRate: 0.05,
  onLowBalance: lowBalanceAlert,
});

const checking = createAccount("checking", {
  owner: "Ahmed",
  balance: 500,
  overdraftLimit: 200,
  onLowBalance: lowBalanceAlert,
});

console.log(" Accounts Created Successfully\n");

// Deposit Operation

console.log(" Deposit Operation ");
savings.deposit(200);
console.log("Ali Savings Balance:", savings.getBalance(), "\n");

//  Withdraw Operation

console.log(" Withdraw Operation ");
checking.withdraw(100);
console.log("Ahmed Checking Balance:", checking.getBalance(), "\n");


//  Transfer (Using call internally)

console.log(" Transfer 300 from Savings to Checking");
savings.transfer(checking, 300);

console.log("Ali Savings Balance:", savings.getBalance());
console.log("Ahmed Checking Balance:", checking.getBalance(), "\n");


//  Add Interest (Savings Only) 

console.log(" Adding Interest to Savings ");
savings.addInterest();
console.log("Ali Savings Balance After Interest:", savings.getBalance(), "\n");

//  Currying Fee Calculator

console.log(" Fee Calculation (Currying) ");
const savingsFee = feeCalculator(0.02);
console.log("2% Fee on 1000:", savingsFee(1000), "\n");

//  Error Handling Demo

console.log(" Error: Attempting to Withdraw More Than Balance + Overdraft Limit ");
try {
  checking.withdraw(2000);
} catch (error) {
  console.log("Error:", error.message);
}
console.log("Ahmed Checking Balance:", checking.getBalance(), "\n");

//  Low Balance Trigger Demo

console.log("Trigger Low Balance Alert ");
try {
  savings.withdraw(1500);
} catch (error) {
  console.log("Error:", error.message);
}
console.log("Ali Savings Balance:", savings.getBalance(), "\n");

//  call / apply / bind Demonstration

console.log(" call / apply / bind Demo ");

const showBalance = function () {
  console.log(this.owner + " Balance:", this.getBalance());
};

showBalance.call(savings);   
showBalance.apply(checking);

const boundShow = showBalance.bind(savings);
boundShow(); 

console.log("\n SIMULATION COMPLETE ");