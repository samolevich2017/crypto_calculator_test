'use strict';

let amount_tokens = document.getElementById("amount_token");
let price_tokens = document.getElementById("price_token");
let totalSum = document.getElementById("sumUSD");
let additional_block = document.getElementById("additional_info");


let input_amount = 0, input_price = 0, calcTotalSum = 0;

// ввод кол-ва токенов
amount_tokens.addEventListener("input", function(e){
    input_amount = e.target.value;
    changeTotalSum(input_amount, input_price);
});

// ввод цены токена
price_tokens.addEventListener("input", function(e){
    input_price = e.target.value;
    changeTotalSum(input_amount, input_price);
});

// расчет итоговой суммы
function changeTotalSum(amount = 0, price = 0){
    calcTotalSum = amount * price;
    totalSum.innerText = calcTotalSum.toFixed(2);
}
