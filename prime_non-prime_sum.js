function summ(number){

primesum=0;
nonprimesum=0;
for(num of number){
    if(num>1){
        count=0;
        for(i=2;i<num;i++){
            if(num%i==0){
                nonprimesum=nonprimesum+Number(num);
                count++;
                break;
            }
        }
        if(count==0){
            primesum=primesum+Number(num);
        }
    }
}
console.log("Sum of all prime numbers is:",primesum);
console.log("Sum of all Non-Primes is:",nonprimesum);
if(primesum>nonprimesum){
    console.log("primesum is bigger than Nonprimesum");
}
else if(primesum==nonprimesum){
    console.log("primesum is equal to Nonprimesum");
}
else{
    console.log("Nonprimesum is bigger than primesum");
}
}
let number=prompt("Enter a number:");
summ(number);
// summ(String(1234566));