function randomNumber() {
    let numberSystem = +prompt("Input system number ");
    let randomNumber = Math.floor(Math.random() * numberSystem);
    let numberUser = +prompt("Input your forecast number ");
    while (numberUser > numberSystem) {
        numberUser = +prompt("Wrong! Try again");
    }
    let count = 0;
    for (let i = 0; i <= numberSystem; i++) {
        count++;
        if(count == 4){
            alert("Wrong. You fail 4 ");
            break;
        }
        if(numberUser < randomNumber){
            alert("Wrong.Your number is smaller than random");
        } else if(numberUser > randomNumber) {
            alert("Wrong. Your number is bigger than random");
        } else{
            alert('Great. You wiwn');
        }
        numberUser = +prompt("Enter number");
    }
    if(count == 4){
        alert("Wrong. You fail 4 ");
    } else {
        alert('Great. You wiwn');
    }
}


