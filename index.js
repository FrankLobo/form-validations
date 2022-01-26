let paymentForm = document.getElementById("payform");

paymentForm.addEventListener("submit", (event) => {
  event.preventDefault();
  let allGood = true;
  const form = event.target;

  let numbersOnly = /^[0-9]+$/;
  let cvcNumbers = /^[0-9]{3}$/;
  let charactersOnly = /^[a-zA-Z\s]+$/;

  if (form.card.value === "" || !numbersOnly.test(form.card.value)) {
    allGood = false;
  }
  if (form.cvc.value === "" || !cvcNumbers.test(form.cvc.value)) {
    allGood = false;
  }
  if (form.amount.value === "" || !numbersOnly.test(form.amount.value)) {
    allGood = false;
  }
  if (form.firstname.value === "" || !charactersOnly.test(form.firstname.value)) {
    allGood = false;
  }
  if (form.lastname.value === "" || !charactersOnly.test(form.lastname.value)) {
    allGood = false;
  }
  if (form.city.value === "" || !charactersOnly.test(form.city.value)) {
    allGood = false;
  }
  if (form.state.value === "Pick a state" || !charactersOnly.test(form.state.value)) {
    allGood = false;
  }
  if (form.postalcode.value === "" || !numbersOnly.test(form.postalcode.value)) {
    allGood = false;
  }
  if (form.message.value === "" || !charactersOnly.test(form.message.value)) {
    allGood = false;
  }

  if (allGood) {
    form.submit();
  } else alert("verify the form");
});
