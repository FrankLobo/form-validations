let paymentForm = document.getElementById("payform");

paymentForm.addEventListener("submit", (e) => {
  // event.preventDefault();
  let allGood = true;
  const form = e.target;

  let numbersOnly = /^[0-9]+$/;
  let cvcNumbers =  /^[0-9]{3}$/;
  let charactersOnly = /^[a-zA-Z\s]+$/;

  if (form.card.value === "" || !numbersOnly.test(form.card.value)) {
    allGood = false;
  }
  if (form.cvc.value === "" || !cvcNumbers.test(form.cvc.value)) {
    allGood = false;
  }
  if (form.amout.value === "" || !charactersOnly.test(form.amout.value)) {
      allGood = false;
  }
if (form.firstname.value === "" || !charactersOnly.test(form.firstname.value)) {
    allGood = false;
}


});
