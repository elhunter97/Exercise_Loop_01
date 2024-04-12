for (let i = 1; i <=100; i++) {
    if (i%3==0 && i%5==0){
        document.write("FizzBuzz"+' ');
        continue;
    } else if (i%5==0){
        document.write("Buzz"+' ');
        continue;
    } else if (i%3==0){
        document.write("Fizz"+' ');
        continue;
    }
    document.write(i+' ');
}