// Set focus when clicking input wrapper 
document.querySelectorAll('.form__input').forEach((el) => {
  el.addEventListener('click', (e) => {
    el.querySelector('input').focus();
  })
})

// 1. Get all input elements
const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const email = document.getElementById('email');
const password = document.getElementById('password');

// 2. Get form elements
const form = document.getElementById('form');

// 3. Validation
const isEmpty = (element) => {
  return element.value ? false : true;
};

const checkEmail = (emailElement) => {
  const mailFormat =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  
  return mailFormat.test(emailElement.value);
};

// onSubmit
form.addEventListener('submit', (e) => {
  e.preventDefault();

  const setIsError = (element) => {
    element.closest('div').classList.add('is-error');
  };

  const resetIsError = (...args) => {
    args.forEach((el) => {
      el.closest('div').classList.remove('is-error');
    })
  };

  const resetValue = (...args) => {
    args.forEach((el) => {
      el.value = '';
    })
  }

  if (isEmpty(fname)) {
    setIsError(fname);
    return false;
  }

  if (isEmpty(lname)) {
    setIsError(lname);
    return false;
  }

  if (isEmpty(email) || !checkEmail(email)) {
    setIsError(email);
    return false;
  }

  if (isEmpty(password)) {
    setIsError(password);
    return false;
  }

  resetIsError(fname, lname, email, password);
  alert('Registered!');
  resetValue(fname, lname, email, password);
});
