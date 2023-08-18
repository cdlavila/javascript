// Without closures (our function doesn't remember the context)
function piggyBank(coins) {
  let content = 0;
  content = content + coins;
  return content;
}

const myPiggyBank = piggyBank;
console.log(myPiggyBank(5)); // Output: 5
console.log(myPiggyBank(4)); // Output: 4


// With closures (our function remembers the context)
function piggyBankClosure(initialAmount) {
  let content = initialAmount;
  return function save(coins) {
    content = content + coins;
    return content;
  };
}

const myPiggyBankClosure = piggyBankClosure(2);
console.log(myPiggyBankClosure(5)); // Output: 7, because 2 + 5 = 7
console.log(myPiggyBankClosure(4)); // Output: 11, because 7 + 4 = 11

const anotherPiggyBankClosure = piggyBankClosure(5);
console.log(anotherPiggyBankClosure(30)); // Output: 35, because 5 + 30 = 35
console.log(anotherPiggyBankClosure(20)); // Output: 55, because 35 + 20 = 55

