let a=0,b=1,c;
document.write(b+' ');
let count = +prompt('Input output number Fibonacci');
for (let i = 2; i <=count; i++) {
    c = a+b;
    document.write(c+' ');
    a = b;
    b = c;
}