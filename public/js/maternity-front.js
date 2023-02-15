const form = document.querySelector("form");
const answer1 = document.querySelector("#answer1");
const answer2 = document.querySelector("#answer2");
const answer3 = document.querySelector("#answer3");
const answerDiv = document.querySelector("div.hidden");

form.addEventListener('submit', event => {
    event.preventDefault();

    const numberOfChildren = +(form.querySelector("#children").value);
    const dateOfBirth = form.querySelector("#birth-date").valueAsDate;

    let startOfMaternity;
    let endOfMaternity;
    let startOfParental;
    let endOfParental;

    const calculateMaternityAndParentalLeave = (weeksOfMaternity, weeksOfParental) => {
        startOfMaternity = dateOfBirth.toLocaleDateString();
        endOfMaternity = ((weeksOfMaternity * 7 * 24 * 60 * 60 * 1000) - (24 * 60 * 60 * 1000)) + Number(dateOfBirth);
        startOfParental = endOfMaternity + (24 * 60 * 60 * 1000);
        endOfParental = ((weeksOfParental * 7 * 24 * 60 * 60 * 1000) - (24 * 60 * 60 * 1000)) + startOfParental;
    };

    switch(numberOfChildren){
        case 0:
            alert("Brak podstaw do wyliczenia urlopu");
            break;

        case 1:
            calculateMaternityAndParentalLeave(20, 32);
            break;

        case 2:
            calculateMaternityAndParentalLeave(31, 34);
            break;

        case 3:
            calculateMaternityAndParentalLeave(33, 34);
            break;

        case 4:
            calculateMaternityAndParentalLeave(35, 34);
            break;

        default:
            calculateMaternityAndParentalLeave(37, 34);
            break;
    }
        answer1.innerText = `Urlop macierzyński: od ${startOfMaternity} do ${new Date(endOfMaternity).toLocaleDateString()}.`;
        answer2.innerText = `Urlop rodzicielski: od ${new Date(startOfParental).toLocaleDateString()} do ${new Date(endOfParental).toLocaleDateString()}.`;
        answer3.innerText = `Razem: od ${startOfMaternity} do ${new Date(endOfParental).toLocaleDateString()}`;

        answerDiv.classList.remove("hidden");

});
