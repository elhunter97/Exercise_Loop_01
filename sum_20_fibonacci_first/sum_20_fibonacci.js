let a=0,b=1,c;
let sum =0;
for (let i = 2; i <=20; i++) {
    c = a+b;
    a = b;
    b = c;
    sum+=c;
}
document.write('sum 20 fibonacci first = '+sum);