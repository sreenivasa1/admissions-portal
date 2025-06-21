const scriptURL = 'https://script.google.com/macros/s/AKfycbxwb-dzaEeeIrRdTzNP_b_J-MjoUCnamPQ0dhCgXePsZIrHs0NYMuARiMre-5MC2Eb7/exec';
const form = document.forms['submit-to-google-sheet'];
const msg = document.getElementById("msg");

form.addEventListener('submit', e => {
  e.preventDefault();
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
      msg.innerHTML = "We will notify you soon!";
      form.reset();
    })
    .catch(error => {
      msg.innerHTML = "Something went wrong. Please try again.";
    });
});
