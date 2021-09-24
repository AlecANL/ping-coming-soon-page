const $form = document.getElementById('form');
const $emailField = document.getElementById('email');

const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

$form.addEventListener('submit', event => {
  event.preventDefault();
  if (!emailRegex.test($emailField.value)) {
    $form.classList.add('is-error');
    return;
  }
  $form.classList.remove('is-error');
  console.log($email.value);
});
