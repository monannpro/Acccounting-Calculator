const form = document.querySelector("form");
const answer1 = document.querySelector("#answer1");
const answerDiv = document.querySelector("div.hidden");

form.addEventListener('submit', event => {
    event.preventDefault();

    const startDate = form.querySelector("#start-date").valueAsDate;
    const endDate = form.querySelector("#end-date").valueAsDate;
    const divider = +(form.querySelector("#num1").value);
    const denominator = +(form.querySelector("#num2").value);
    const numberOfDays = +(form.querySelector("#days").value);

    if(denominator === 0){
        alert("Błędny wymiar czasu pracy");
    } else {
        const answerInDays = Math.ceil(((numberOfDays / 12) * ((endDate.getMonth() - startDate.getMonth()) + 1)) * (divider / denominator));
        answer1.innerText = `liczba dni urlopu w danym roku: ${answerInDays}`;
    }
    answerDiv.classList.remove("hidden");

});
