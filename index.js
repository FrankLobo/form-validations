// const { doc } = require("prettier");

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
    form.card.style.backgroundColor = "#F8D7DA";
  }
  if (form.cvc.value === "" || !cvcNumbers.test(form.cvc.value)) {
    allGood = false;
    form.cvc.style.backgroundColor = "#F8D7DA";
  }
  if (form.amount.value === "" || !numbersOnly.test(form.amount.value)) {
    allGood = false;
  form.amount.style.backgroundColor = "#F8D7DA";
  }
  if (form.firstname.value === "" || !charactersOnly.test(form.firstname.value)) {
    allGood = false;
    form.firstname.style.backgroundColor = "#F8D7DA";
  }
  if (form.lastname.value === "" || !charactersOnly.test(form.lastname.value)) {
    allGood = false;
    form.lastname.style.backgroundColor = "#F8D7DA";
  }
  if (form.city.value === "") {
    allGood = false;
    form.city.style.backgroundColor = "#F8D7DA";
  }
  if (form.state.value === "") {
    allGood = false;
    form.state.style.backgroundColor = "#F8D7DA";
  }
  if (form.postalcode.value === "" || !numbersOnly.test(form.postalcode.value)) {
    allGood = false;
    form.postalcode.style.backgroundColor = "#F8D7DA";
  }
  if (form.message.value === "") {
    allGood = false;
    form.message.style.backgroundColor = "#F8D7DA";
  }

  if (allGood) {
    form.submit();
  } else if(!allGood){
    document.getElementById('alertmissinginfo').style.display = "block";
  }
  

  paymentForm.addEventListener('reset', (e) => {
    const form = e.target;
    alertMissingInfo = document.getElementById('alertmissinginfo').style.display = "none";
    if (form.card.value === "") {
      form.card.style.backgroundColor = "#FFFFFF";
    }
    if (form.cvc.value === "") {
      form.cvc.style.backgroundColor = "#FFFFFF";
    }
    if (form.amount.value === "" ) {
      form.amount.style.backgroundColor = "#FFFFFF";
    }
    if (form.firstname.value === "") {
      form.firstname.style.backgroundColor = "#FFFFFF";
    }
    if (form.lastname.value === "") {
      form.lastname.style.backgroundColor = "#FFFFFF";
    }
    if (form.city.value === "" ) {
      form.city.style.backgroundColor = "#FFFFFF";
    }
    if (form.state.value === "" ) {
      form.state.style.backgroundColor = "#FFFFFF";
    }
    if (form.postalcode.value === "") {
      form.postalcode.style.backgroundColor = "#FFFFFF";
    }
    if (form.message.value === "") {
      form.message.style.backgroundColor = "#FFFFFF";
    }
  })

});

alertMissingInfo = document.getElementById('alertmissinginfo').style.display = "none";

