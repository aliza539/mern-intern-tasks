// accfactory.js
// Base Account Constructor
function Account(owner, initialBalance = 0, lowBalanceCallback = null) {
  let balance = initialBalance; 

  this.owner = owner;

  // balance access
  this.getBalance = function () {
    return balance;
  };

  // callbacks for low-balance alerts.
  const updateBalance = (newBalance) => {
    balance = newBalance;

    if (balance < 100 && typeof lowBalanceCallback === "function") {
      lowBalanceCallback(balance);
    }
  };

  this.deposit = function (amount) {
    if (amount <= 0) throw new Error("Deposit must be positive");
    updateBalance(balance + amount);
    return balance;
  };

  this.withdraw = function (amount) {
    if (amount <= 0) throw new Error("Withdraw must be positive");
    if (amount > balance) throw new Error("Insufficient funds");
    updateBalance(balance - amount);
    return balance;
  };
}

// Prototype Methods

Account.prototype.deposit_ = function (amount) {
  return this.deposit(amount);
};

Account.prototype.withdraw_ = function (amount) {
  return this.withdraw(amount);
};

Account.prototype.transfer = function (targetAccount, amount) {
  Account.prototype.withdraw_.call(this, amount);
  Account.prototype.deposit_.call(targetAccount, amount);
};

// Savings Account

function SavingsAccount(owner, initialBalance, interestRate, callback) {
  Account.call(this, owner, initialBalance, callback);
  this.interestRate = interestRate;
}

SavingsAccount.prototype = Object.create(Account.prototype);
SavingsAccount.prototype.constructor = SavingsAccount;

SavingsAccount.prototype.addInterest = function () {
  const interest = this.getBalance() * this.interestRate;
  this.deposit(interest);
};

// Checking Account

function CheckingAccount(owner, initialBalance, overdraftLimit, callback) {
  Account.call(this, owner, initialBalance, callback);
  this.overdraftLimit = overdraftLimit;
}

CheckingAccount.prototype = Object.create(Account.prototype);
CheckingAccount.prototype.constructor = CheckingAccount;

CheckingAccount.prototype.withdraw = function (amount) {
  const currentBalance = this.getBalance();

  if (amount > currentBalance + this.overdraftLimit) {
    throw new Error("Overdraft limit exceeded");
  }

  return this.withdraw_(amount);
};

// currying for fee calculator

export function feeCalculator(rate) {
  return function (amount) {
    return amount * rate;
  };
}

// exporting accfactory function

export function createAccount(type, options) {
  const { owner, balance, interestRate, overdraftLimit, onLowBalance } =
    options;

  if (type === "savings") {
    return new SavingsAccount(owner, balance, interestRate, onLowBalance);
  }

  if (type === "checking") {
    return new CheckingAccount(
      owner,
      balance,
      overdraftLimit,
      onLowBalance
    );
  }

  throw new Error("Invalid account type");
}