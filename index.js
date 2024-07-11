let counter = 0;
let corrects = 0;

let h1 = document.querySelector("h1");
let input = document.querySelector("input");
let button = document.querySelector("button");
let p = document.querySelector("p");

let savollar = ["2 + 2 = ?", "3 * 7 = ?", "7 - 4 = ?", "8 / 4 = ?"];
let javoblar = ["4", "21", "3", "2"];

h1.textContent = savollar[counter];

button.addEventListener("click", function (event) {
    event.preventDefault();

    let answer = input.value;

    if (answer === javoblar[counter]) {
        corrects = corrects + 1;
    }

    counter = counter + 1;

    h1.textContent = savollar[counter];

    input.value = "";

    if (counter === savollar.length) {
        p.textContent = `Siz ${corrects} ta savolga to'g'ri javob berdingiz!`;
    } 
});