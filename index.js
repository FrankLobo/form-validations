let paymentForm = document.getElementById("payform");

paymentForm.addEventListener("submit", e => {
  // event.preventDefault();
  let allGood = true;
  const form = e.target;

  let numbersOnly = /^[0-9]+$/;
  let charactersOnly = /^[a-z]+$/;
  let cvcNumbers = /^[0-9]{3}$/;

  if (form.card.value === "" || !numbersOnly.test(form.card.value)) {
    allGood = false;
  }
  if (form.cvc.value === "" || !cvcNumbers.test(form.cvc.value)) {
    allGood = false;
  }
});
