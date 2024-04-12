let a=0,b=1,c;
let count = prompt('Input output number Fibonacci');
for (let i = 2; i <=count; i++) {
    c = a+b;
    a = b;
    b = c;
    if (c%5==0){
        document.write('first fibonacci divisible 5 = '+c);
        break;
    }
}