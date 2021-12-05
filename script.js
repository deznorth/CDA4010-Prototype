// Global variables
let emailFieldsCount = 1;
let phoneFieldsCount = 1;

//count variables for education fields
let educationLevelCount = 1;
let institutionNameCount = 1;
let institutionLocationCount = 1;
let fromDateCount = 1;
let toDateCount = 1;
let degreeCount = 1;

function handleSubmit() {
  const form = document.getElementById('Form');
  // Object containing all form data keyed by their "name" property
  const formData = Object.fromEntries(new FormData(form));
  console.log(formData);
}

function addEmailField() {
  // Increment email fields count
  emailFieldsCount++;

  // Generate value for input's id and name
  const inputName = `email${emailFieldsCount}`;

  // Create the containing div and assign the classes to it
  const div = document.createElement('div');
  div.className = 'col form-floating mb-3';

  // Create the input and assign all attributes
  const input = document.createElement('input');
  input.type = 'email';
  input.name = inputName;
  input.id = inputName;
  input.placeholder = 'johndoe@gmail.com';
  input.className = 'form-control';

  // Create the label and assign all attributes
  const label = document.createElement('label');
  label.htmlFor = inputName;
  label.textContent = `Email Address ${emailFieldsCount}`;

  // Append input and label to the div
  div.appendChild(input);
  div.appendChild(label);

  // Append the div to the container
  const emailsContainer = document.getElementById('EmailsContainer');
  emailsContainer.appendChild(div);
}

function addPhoneField() {
  phoneFieldsCount++;

  const inputName = `phoneNumber${phoneFieldsCount}`;

  const div = document.createElement('div');
  div.className = 'col form-floating mb-3';

  const input = document.createElement('input');
  input.type = 'tel';
  input.name = inputName;
  input.id = inputName;
  input.placeholder = '1231231234';
  input.className = 'form-control';
  input.minLength = 10;

  const label = document.createElement('label');
  label.htmlFor = inputName;
  label.textContent = `Phone Number ${phoneFieldsCount}`;

  div.appendChild(input);
  div.appendChild(label);

  const phonesContainer = document.getElementById('PhonesContainer');
  phonesContainer.appendChild(div);
}
