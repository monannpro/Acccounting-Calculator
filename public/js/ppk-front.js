const form = document.querySelector("form");
const answer1 = document.querySelector(".answer1");
const answer2 = document.querySelector(".answer2");
const answer3 = document.querySelector(".answer3");
const answerDiv = document.querySelector("div.hidden");

form.addEventListener('submit', event => {
    event.preventDefault();

    const salary = +(form.querySelector("#ppk1").value);
    const employeeBasicPay = +((form.querySelector("#ppk2").value) * 0.01);
    const employerBasicPay = +((form.querySelector("#ppk3").value)* 0.01);
    const employeeExtraPay = +((form.querySelector("#ppk4").value)* 0.01);
    const employerExtraPay = +((form.querySelector("#ppk5").value)* 0.01);

    if(salary===0){
        alert("Brak podstawy do obliczenia wpłat.")
    } else {
        const employeePay = (salary * employeeBasicPay) + (salary * employeeExtraPay);
        const employerPay = (salary * employerBasicPay) + (salary * employerExtraPay);

        answer1.innerText = `Uczestnik PPK: ${employeePay} zł.`;
        answer2.innerText = `Podmiot zatrudniający: ${employerPay} zł.`;
        answer3.innerText = `Łącznie: ${employeePay + employerPay} zł.`;
    }
    answerDiv.classList.remove("hidden");
});