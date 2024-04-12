let sum =0;
let count = 0;
for (let i = 0; i < 3000; i++) {
    if (i%7==0){
        sum+=i;
        count++;
    }
    if (count>30) break;
}
document.write('sum 30 numbers divisible 7 = '+sum);