let numbers = [2e100, 200000, 1.5, Infinity];
for(let i=0; index< numbers.length; index++) {
    console.log(`is ${numbers[i]} Integer: ${Number.isInteger(numbers[i])}`);
    console.log(`is ${numbers[i]} safe Integer: ${Number.isSafeInteger(numbers[i])}`);
    console.log(`is ${numbers[i]} finite number: ${Number.isFinite(numbers[i])}`);
}
//is 2e+100 Integer: true
//is 2e+100 safe Integer: false
//is 2e+100 finite number: true
//is 200000 Integer: true
//is 200000 safe Integer: true
//is 200000 finite number: true
//is 1.5 Integer: false
//is 1.5 safe Integer: false
//is 1.5 finite number: true
//is Infinity Integer: false
//is Infinity safe Integer: false
//is Infinity finite number: false
