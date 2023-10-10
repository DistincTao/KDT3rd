function Account(owner, accNum, balance) {
  this.owner = owner; // 앞의 에제에서 account.owner = "홍길동"
  this.accNum = accNum; 
  this.balance = balance;
  this.name = "직장인 비과세 예금";
  this.bankName = "신한은행";

  this.deposit = function (money) {
    this.balance += money;
  };

  this.checkBalance = function () {
    return this.balance;
  };

  this.withdraw = function (money) {
    if (this.balance >= money ) {
    this.balance -= money;
    } else {
    alert("잔액이 부족합니다.");
    }  
  };
}