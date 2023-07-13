const form = document.getElementById("form");
const validateInput = document.querySelectorAll(".required"); //items para validar
const spans = document.querySelectorAll(".span__required");
const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

form.addEventListener("submit", (event) => {
  event.preventDefault();
  nameValidate();
  emailValidate();
  subjectValidate();
  messageValidate();
  form.submit();
});

//Funções para validar os inputs
function nameValidate() {
  if (validateInput[0].value.length < 1 || validateInput[0].value.length > 50) {
    setError(0);
  } else {
    removeError(0);
  }
}

function emailValidate() {
  if (!emailRegex.test(validateInput[1].value)) {
    setError(1);
  } else {
    removeError(1);
  }
}

function subjectValidate() {
  if (validateInput[2].value.length < 1 || validateInput[2].value.length > 50) {
    setError(2);
  } else {
    removeError(2);
  }
}

function messageValidate() {
  if (
    validateInput[3].value.length < 1 ||
    validateInput[3].value.length > 300
  ) {
    setError(3);
  } else {
    removeError(3);
  }
}

//Função que exibem o erro na tela
function setError(index) {
  validateInput[index].style.color = "#FF0000";
  spans[index].style.display = "block";
}

//Função que remove o erro da tela
function removeError(index) {
  validateInput[index].style.color = "";
  spans[index].style.display = "none";
}
