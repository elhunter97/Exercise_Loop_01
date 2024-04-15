//Số tiền lãi theo tháng = Số tiền gửi x lãi suất (%năm)/12 x số tháng gửi
let month_send = +prompt('Input month you send');
let rate = +prompt('Input rate'); // lãi hàng tháng
let rateMonth = rate/100;
let money = +prompt('Input money you send');
for (let i = 1; i < month_send; i++) {
    money+=rate;
}
document.write('Money you must pay for bank = '+money);
