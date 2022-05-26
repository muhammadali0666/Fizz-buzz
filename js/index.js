const elForm = document.querySelector(".form");
const elValueInput = document.querySelector(".form-input");
const elResult = document.querySelector(".result");

elForm.addEventListener('submit', function (evt){
  evt.preventDefault();

  
  let number = parseFloat(elValueInput.value.trim(), 10);

  if (number%3 === 0 && number%5 === 0){
    elResult.classList.remove('d-none');
    elResult.textContent = `FizzBuzz`;
  } 
  else if (number%5 === 0){
    elResult.classList.remove('d-none');
    elResult.textContent = `Fizz`;
  }
  else if (number%3 === 0){
    elResult.classList.remove('d-none');
    elResult.textContent = `Buzz`;
  }
  else {
    elResult.classList.remove('d-none');
    elResult.textContent = `${number}`;
  };
  
})