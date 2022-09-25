function textareaCapture() {
  const textarea = document.getElementById('textarea');
  const textareaParagraph = document.createElement('p');
  textareaParagraph.innerText = `Observações: ${textarea.value}`;
  document.getElementById('form-data').appendChild(textareaParagraph);
}

function ratingCapture() {
  const ratingSelected = document.querySelector('input[name="rate"]:checked').value;
  const ratingParagraph = document.createElement('p');
  ratingParagraph.innerText = `Avaliação: ${ratingSelected}`;
  document.getElementById('form-data').appendChild(ratingParagraph);
}

function subjectCapture() {
  const subjectCheckboxes = document.querySelectorAll('input[class="subject"]');
  const subjectParagraph = document.createElement('p');
  const subjectSelected = [];
  subjectCheckboxes.forEach((subject) => {
    if (subject.checked) {
      subjectSelected.push(subject.value);
    }
  });
  subjectParagraph.innerText = `Matérias: ${subjectSelected.join(', ')}`;
  document.getElementById('form-data').appendChild(subjectParagraph);
}

function familyCapture() {
  const familySelected = document.querySelector('input[name="family"]:checked').value;
  const familyParagraph = document.createElement('p');
  familyParagraph.innerText = `Família: ${familySelected}`;
  document.getElementById('form-data').appendChild(familyParagraph);
}

function houseCapture() {
  const house = document.getElementById('house').value;
  const houseParagraph = document.createElement('p');
  houseParagraph.innerText = `Casa: ${house}`;
  document.getElementById('form-data').appendChild(houseParagraph);
}

function emailCapture() {
  const emailInput = document.getElementById('input-email');
  const emailParagraph = document.createElement('p');
  emailParagraph.innerText = `Email: ${emailInput.value}`;
  document.getElementById('form-data').appendChild(emailParagraph);
}

function fullNameCapture() {
  const nameInput = document.getElementById('input-name').value;
  const lastNameInput = document.getElementById('input-lastname').value;
  const fullNameParagraph = document.createElement('p');
  fullNameParagraph.innerText = `Nome: ${nameInput} ${lastNameInput}`;
  document.getElementById('form-data').appendChild(fullNameParagraph);
}

function keypressCharacter() {
  const textareaMax = document.getElementById('textarea');
  const counter = textareaMax.maxLength - textareaMax.value.length;
  const span = document.getElementById('counter');
  span.innerText = counter;
}

function testIfIsChecked(checkbox) {
  const agreementCheckbox = checkbox.target;
  const submitButton = document.getElementById('submit-btn');
  if (agreementCheckbox.checked === true) {
    submitButton.removeAttribute('disabled');
  } else submitButton.setAttribute('disabled', true);
}

function agreement() {
  const agreementCheckbox = document.getElementById('agreement');
  agreementCheckbox.addEventListener('click', testIfIsChecked);
}

function createRadio() {
  const radio = document.getElementById('radio-section');
  const labelRadioSection = document.createElement('section');
  const labelRadio = document.createElement('label');
  radio.appendChild(labelRadio);
  labelRadio.setAttribute('id', 'label-rate');
  labelRadio.innerText = 'Como você avalia a Trybewarts?';
  labelRadio.appendChild(labelRadioSection);
  for (let j = 1; j <= 10; j += 1) {
    const labelRadioChild = document.createElement('label');
    labelRadioSection.appendChild(labelRadioChild);
    labelRadioChild.innerText = [j];
    const inputRadio = document.createElement('input');
    labelRadioChild.appendChild(inputRadio);
    inputRadio.setAttribute('type', 'radio');
    inputRadio.setAttribute('name', 'rate');
    inputRadio.setAttribute('value', [j]);
  }
}

function createCheckbox() {
  const checkbox = document.getElementById('checkbox-section');
  const labelCheckbox = document.createElement('label');
  checkbox.appendChild(labelCheckbox);
  labelCheckbox.setAttribute('id', 'label-content');
  labelCheckbox.innerText = 'Qual conteúdo você está com mais vontade de aprender?';
  const checkboxDiv = document.createElement('div');
  checkbox.appendChild(checkboxDiv);
  const itensTechnology = ['HoFs', 'Jest', 'Promises', 'React', 'SQL', 'Python'];
  for (let index = 0; index < itensTechnology.length; index += 1) {
    const labelCheckboxChild = document.createElement('label');
    checkboxDiv.appendChild(labelCheckboxChild);
    labelCheckboxChild.innerText = itensTechnology[index];
    const inputCreate = document.createElement('input');
    inputCreate.classList.add('subject');
    labelCheckboxChild.appendChild(inputCreate);
    inputCreate.setAttribute('type', 'checkbox');
    inputCreate.setAttribute('value', itensTechnology[index]);
  }
}

function createFamily() {
  const family = document.getElementById('family-section');
  const label = document.createElement('label');
  family.appendChild(label);
  label.setAttribute('id', 'label-family');
  label.innerText = 'Qual sua família?';
  const itens = ['Frontend', 'Backend', 'FullStack'];
  for (let i = 0; i < itens.length; i += 1) {
    const childLabel = document.createElement('label');
    family.appendChild(childLabel);
    childLabel.innerText = `Familia ${itens[i]}`;
    const element = document.createElement('input');
    childLabel.appendChild(element);
    element.setAttribute('type', 'radio');
    element.setAttribute('name', 'family');
    element.setAttribute('value', itens[i]);
  }
}

function loginTest() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  if (email === 'tryber@teste.com' && password === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

function loginForms() {
  const btnLogin = document.getElementById('btn-login');
  btnLogin.addEventListener('click', loginTest);
}

window.onload = () => {
  keypressCharacter();
  document.getElementById('textarea').addEventListener('input', keypressCharacter);
  createRadio();
  createCheckbox();
  createFamily();
  loginForms();
  agreement();
};

document.getElementById('submit-btn').addEventListener('click', (event) => {
  event.preventDefault();
  const sectionMain = document.querySelector('main');
  const formCreate = document.createElement('form');
  formCreate.setAttribute('id', 'form-data');
  sectionMain.appendChild(formCreate);
  fullNameCapture();
  emailCapture();
  houseCapture();
  familyCapture();
  subjectCapture();
  ratingCapture();
  textareaCapture();
  document.getElementById('evaluation-form').style.display = 'none';
});
