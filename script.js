// Global variables
let emailFieldsCount = 1;
let phoneFieldsCount = 1;
let educationGroupsCount = 1;

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

function addEducationGroup() {
  educationGroupsCount++;

  // Declare Input Names
  const educationLevelName = `educationLevel${educationGroupsCount}`;
  const institutionNameName = `institutionName${educationGroupsCount}`;
  const institutionCityName = `institutionCity${educationGroupsCount}`;
  const fromDateName = `fromDate${educationGroupsCount}`;
  const toDateName = `toDate${educationGroupsCount}`;
  const degreeName = `degree${educationGroupsCount}`;

  // Create the group's row
  const row = document.createElement('div');
  row.className = 'row g-2 mb-3';

  // Create the columns
  const educationLevelColumn = document.createElement('div');
  educationLevelColumn.className = 'col-lg-2 form-floating mb-3';

  const institutionNameColumn = document.createElement('div');
  institutionNameColumn.className = 'col-lg-2 form-floating mb-3';

  const institutionCityColumn = document.createElement('div');
  institutionCityColumn.className = 'col-lg-2 form-floating mb-3';

  const fromDateColumn = document.createElement('div');
  fromDateColumn.className = 'col-lg-2 form-floating mb-3';

  const toDateColumn = document.createElement('div');
  toDateColumn.className = 'col-lg-2 form-floating mb-3';

  const degreeColumn = document.createElement('div');
  degreeColumn.className = 'col-lg-2 form-floating mb-3';

  // Create the inputs
  const educationLevelInput = document.createElement('input');
  educationLevelInput.type = 'text';
  educationLevelInput.name = educationLevelName;
  educationLevelInput.id = educationLevelName;
  educationLevelInput.placeholder = 'education';
  educationLevelInput.className = 'form-control';
  educationLevelInput.minLength = 2;
  educationLevelInput.maxLength = 30;

  const institutionNameInput = document.createElement('input');
  institutionNameInput.type = 'text';
  institutionNameInput.name = institutionNameName;
  institutionNameInput.id = institutionNameName;
  institutionNameInput.placeholder = 'Name';
  institutionNameInput.className = 'form-control';
  institutionNameInput.minLength = 2;
  institutionNameInput.maxLength = 30;

  const institutionCityInput = document.createElement('input');
  institutionCityInput.type = 'text';
  institutionCityInput.name = institutionCityName;
  institutionCityInput.id = institutionCityName;
  institutionCityInput.placeholder = 'Jacksonville, FL';
  institutionCityInput.className = 'form-control';
  institutionCityInput.minLength = 2;
  institutionCityInput.maxLength = 30;

  const fromDateInput = document.createElement('input');
  fromDateInput.type = 'date';
  fromDateInput.name = fromDateName;
  fromDateInput.id = fromDateName;
  fromDateInput.placeholder = 'from';
  fromDateInput.className = 'form-control';
  fromDateInput.minLength = 2;
  fromDateInput.maxLength = 30;

  const toDateInput = document.createElement('input');
  toDateInput.type = 'date';
  toDateInput.name = toDateName;
  toDateInput.id = toDateName;
  toDateInput.placeholder = 'to';
  toDateInput.className = 'form-control';
  toDateInput.minLength = 2;
  toDateInput.maxLength = 30;

  const degreeInput = document.createElement('input');
  degreeInput.type = 'text';
  degreeInput.name = degreeName;
  degreeInput.id = degreeName;
  degreeInput.placeholder = 'degree';
  degreeInput.className = 'form-control';
  degreeInput.minLength = 2;
  degreeInput.maxLength = 30;

  // Create the labels
  const educationLevelLabel = document.createElement('label');
  educationLevelLabel.htmlFor = educationLevelName;
  educationLevelLabel.textContent = `Level of Education ${educationGroupsCount}`;

  const institutionNameLabel = document.createElement('label');
  institutionNameLabel.htmlFor = institutionNameName;
  institutionNameLabel.textContent = `Name of Institution ${educationGroupsCount}`;

  const institutionCityLabel = document.createElement('label');
  institutionCityLabel.htmlFor = institutionCityName;
  institutionCityLabel.textContent = `City/State ${educationGroupsCount}`;

  const fromDateLabel = document.createElement('label');
  fromDateLabel.htmlFor = fromDateName;
  fromDateLabel.textContent = `From ${educationGroupsCount}`;

  const toDateLabel = document.createElement('label');
  toDateLabel.htmlFor = toDateName;
  toDateLabel.textContent = `To ${educationGroupsCount}`;

  const degreeLabel = document.createElement('label');
  degreeLabel.htmlFor = degreeName;
  degreeLabel.textContent = `Degree ${educationGroupsCount}`;

  // Append the inputs and labels to columns
  educationLevelColumn.appendChild(educationLevelInput);
  educationLevelColumn.appendChild(educationLevelLabel);

  institutionNameColumn.appendChild(institutionNameInput);
  institutionNameColumn.appendChild(institutionNameLabel);

  institutionCityColumn.appendChild(institutionCityInput);
  institutionCityColumn.appendChild(institutionCityLabel);

  toDateColumn.appendChild(toDateInput);
  toDateColumn.appendChild(toDateLabel);

  fromDateColumn.appendChild(fromDateInput);
  fromDateColumn.appendChild(fromDateLabel);

  degreeColumn.appendChild(degreeInput);
  degreeColumn.appendChild(degreeLabel);

  // Append the columns to the row
  row.appendChild(educationLevelColumn);
  row.appendChild(institutionNameColumn);
  row.appendChild(institutionCityColumn);
  row.appendChild(fromDateColumn);
  row.appendChild(toDateColumn);
  row.appendChild(degreeColumn);

  // Append the row to the container
  const educationContainer = document.getElementById('EducationContainer');
  educationContainer.appendChild(row);
}
