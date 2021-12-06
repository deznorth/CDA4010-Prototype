// Global variables
let emailFieldsCount = 1;
let phoneFieldsCount = 1;
let educationGroupsCount = 1;
let referenceGroupsCount = 1;
let workExperienceGroupsCount = 1;

function handleSubmit() {
  const form = document.getElementById('Form');
  // Object containing all form data keyed by their "name" property
  const formData = Object.fromEntries(new FormData(form));
  console.log(formData);

  // Display formData on a pre element under the form
  const submissionContentContainer = document.getElementById('SubmissionContent');
  submissionContentContainer.textContent = JSON.stringify(formData, null, 2);
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
  row.className = 'row g-2 mb-4';

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

function addReferenceGroup() {
  referenceGroupsCount++;

  // Declare Input Names
  const referenceFirstNameName = `referenceFirstName${referenceGroupsCount}`;
  const referenceLastNameName = `referenceLastName${referenceGroupsCount}`;
  const phoneNumberName = `phoneNumber${referenceGroupsCount}`;
  const emailName = `email${referenceGroupsCount}`;
  const referenceRelationshipName = `referenceRelationship${referenceGroupsCount}`;
  const referenceTitleName = `referenceTitle${referenceGroupsCount}`;

  // Create the group's row
  const row = document.createElement('div');
  row.className = 'row g-2 mb-4';

  // Create the columns
  const referenceFirstNameColumn = document.createElement('div');
  referenceFirstNameColumn.className = 'col-lg-2 form-floating mb-3';

  const referenceLastNameColumn = document.createElement('div');
  referenceLastNameColumn.className = 'col-lg-2 form-floating mb-3';

  const phoneNumberColumn = document.createElement('div');
  phoneNumberColumn.className = 'col-lg-2 form-floating mb-3';

  const emailColumn = document.createElement('div');
  emailColumn.className = 'col-lg-2 form-floating mb-3';

  const referenceRelationshipColumn = document.createElement('div');
  referenceRelationshipColumn.className = 'col-lg-2 form-floating mb-3';

  const referenceTitleColumn = document.createElement('div');
  referenceTitleColumn.className = 'col-lg-2 form-floating mb-3';

  // Create the inputs
  const referenceFirstNameInput = document.createElement('input');
  referenceFirstNameInput.type = 'text';
  referenceFirstNameInput.name = referenceFirstNameName;
  referenceFirstNameInput.id = referenceFirstNameName;
  referenceFirstNameInput.placeholder = 'John';
  referenceFirstNameInput.className = 'form-control';
  referenceFirstNameInput.minLength = 2;
  referenceFirstNameInput.maxLength = 30;

  const referenceLastNameInput = document.createElement('input');
  referenceLastNameInput.type = 'text';
  referenceLastNameInput.name = referenceLastNameName;
  referenceLastNameInput.id = referenceLastNameName;
  referenceLastNameInput.placeholder = 'Doe';
  referenceLastNameInput.className = 'form-control';
  referenceLastNameInput.minLength = 2;
  referenceLastNameInput.maxLength = 30;

  const phoneNumberInput = document.createElement('input');
  phoneNumberInput.type = 'tel';
  phoneNumberInput.name = phoneNumberName;
  phoneNumberInput.id = phoneNumberName;
  phoneNumberInput.placeholder = '1231231234';
  phoneNumberInput.className = 'form-control';

  const emailInput = document.createElement('input');
  emailInput.type = 'email';
  emailInput.name = emailName;
  emailInput.id = emailName;
  emailInput.placeholder = 'johndoe@gmail.com';
  emailInput.className = 'form-control';

  const referenceRelationshipInput = document.createElement('input');
  referenceRelationshipInput.type = 'text';
  referenceRelationshipInput.name = referenceRelationshipName;
  referenceRelationshipInput.id = referenceRelationshipName;
  referenceRelationshipInput.placeholder = 'friend';
  referenceRelationshipInput.className = 'form-control';
  referenceRelationshipInput.minLength = 2;
  referenceRelationshipInput.maxLength = 30;

  const referenceTitleInput = document.createElement('input');
  referenceTitleInput.type = 'text';
  referenceTitleInput.name = referenceTitleName;
  referenceTitleInput.id = referenceTitleName;
  referenceTitleInput.placeholder = 'Manager';
  referenceTitleInput.className = 'form-control';
  referenceTitleInput.minLength = 2;
  referenceTitleInput.maxLength = 30;

  // Create the labels
  const referenceFirstNameLabel = document.createElement('label');
  referenceFirstNameLabel.htmlFor = referenceFirstNameName;
  referenceFirstNameLabel.textContent = `First Name ${referenceGroupsCount}`;

  const referenceLastNameLabel = document.createElement('label');
  referenceLastNameLabel.htmlFor = referenceLastNameName;
  referenceLastNameLabel.textContent = `Last Name ${referenceGroupsCount}`;

  const phoneNumberLabel = document.createElement('label');
  phoneNumberLabel.htmlFor = phoneNumberName;
  phoneNumberLabel.textContent = `Phone Number ${referenceGroupsCount}`;

  const emailLabel = document.createElement('label');
  emailLabel.htmlFor = emailName;
  emailLabel.textContent = `Email Address ${referenceGroupsCount}`;

  const referenceRelationshipLabel = document.createElement('label');
  referenceRelationshipLabel.htmlFor = referenceRelationshipName;
  referenceRelationshipLabel.textContent = `Relationship ${referenceGroupsCount}`;

  const referenceTitleLabel = document.createElement('label');
  referenceTitleLabel.htmlFor = referenceTitleName;
  referenceTitleLabel.textContent = `Title ${referenceGroupsCount}`;

  // Append the inputs and labels to columns
  referenceFirstNameColumn.appendChild(referenceFirstNameInput);
  referenceFirstNameColumn.appendChild(referenceFirstNameLabel);

  referenceLastNameColumn.appendChild(referenceLastNameInput);
  referenceLastNameColumn.appendChild(referenceLastNameLabel);

  phoneNumberColumn.appendChild(phoneNumberInput);
  phoneNumberColumn.appendChild(phoneNumberLabel);

  referenceRelationshipColumn.appendChild(referenceRelationshipInput);
  referenceRelationshipColumn.appendChild(referenceRelationshipLabel);

  emailColumn.appendChild(emailInput);
  emailColumn.appendChild(emailLabel);

  referenceTitleColumn.appendChild(referenceTitleInput);
  referenceTitleColumn.appendChild(referenceTitleLabel);

  // Append the columns to the row
  row.appendChild(referenceFirstNameColumn);
  row.appendChild(referenceLastNameColumn);
  row.appendChild(phoneNumberColumn);
  row.appendChild(emailColumn);
  row.appendChild(referenceRelationshipColumn);
  row.appendChild(referenceTitleColumn);

  // Append the row to the container
  const educationContainer = document.getElementById('ReferencesContainer');
  educationContainer.appendChild(row);
}

function addWorkExperienceGroup() {
  workExperienceGroupsCount++;

  // Declare Input Names
  const employerNameName = `employerName${workExperienceGroupsCount}`;
  const supervisorNameName = `supervisorName${workExperienceGroupsCount}`;
  const experiencePhoneNumberName = `experiencePhoneNumber${workExperienceGroupsCount}`;
  const experienceTitleName = `experienceTitle${workExperienceGroupsCount}`;
  const experienceStartDateName = `experienceStartDate${workExperienceGroupsCount}`;
  const experienceEndDateName = `experienceEndDate${workExperienceGroupsCount}`;
  const experienceDescriptionName = `experienceDescription${workExperienceGroupsCount}`;
  const experienceContactAgreementName = `experienceContactAgreement${workExperienceGroupsCount}`;

  // Create the group's row
  const row = document.createElement('div');
  row.className = 'row g-2 mb-4';

  // Create the inputs row
  const inputsRow = document.createElement('div');
  inputsRow.className = 'row g-2';

  // Create the textarea row
  const textareaRow = document.createElement('div');
  textareaRow.className = 'row g-2';

  // Create the checkbox row
  const checkboxRow = document.createElement('div');
  checkboxRow.className = 'row g-2';

  // Create the columns
  const employerNameColumn = document.createElement('div');
  employerNameColumn.className = 'col-lg-2 form-floating mb-3';

  const supervisorNameColumn = document.createElement('div');
  supervisorNameColumn.className = 'col-lg-2 form-floating mb-3';

  const experiencePhoneNumberColumn = document.createElement('div');
  experiencePhoneNumberColumn.className = 'col-lg-2 form-floating mb-3';

  const experienceTitleColumn = document.createElement('div');
  experienceTitleColumn.className = 'col-lg-2 form-floating mb-3';

  const experienceStartDateColumn = document.createElement('div');
  experienceStartDateColumn.className = 'col-lg-2 form-floating mb-3';

  const experienceEndDateColumn = document.createElement('div');
  experienceEndDateColumn.className = 'col-lg-2 form-floating mb-3';

  const experienceDescriptionColumn = document.createElement('div');
  experienceDescriptionColumn.className = 'col form-floating mb-3';

  const experienceContactAgreementColumn = document.createElement('div');
  experienceContactAgreementColumn.className = 'form-check';

  // Create the inputs
  const employerNameInput = document.createElement('input');
  employerNameInput.type = 'text';
  employerNameInput.name = employerNameName;
  employerNameInput.id = employerNameName;
  employerNameInput.placeholder = 'Advent';
  employerNameInput.className = 'form-control';
  employerNameInput.minLength = 2;
  employerNameInput.maxLength = 30;

  const supervisorNameInput = document.createElement('input');
  supervisorNameInput.type = 'text';
  supervisorNameInput.name = supervisorNameName;
  supervisorNameInput.id = supervisorNameName;
  supervisorNameInput.placeholder = 'Jimmy';
  supervisorNameInput.className = 'form-control';
  supervisorNameInput.minLength = 2;
  supervisorNameInput.maxLength = 30;

  const experiencePhoneNumberInput = document.createElement('input');
  experiencePhoneNumberInput.type = 'tel';
  experiencePhoneNumberInput.name = experiencePhoneNumberName;
  experiencePhoneNumberInput.id = experiencePhoneNumberName;
  experiencePhoneNumberInput.placeholder = '1231231234';
  experiencePhoneNumberInput.className = 'form-control';

  const experienceTitleInput = document.createElement('input');
  experienceTitleInput.type = 'text';
  experienceTitleInput.name = experienceTitleName;
  experienceTitleInput.id = experienceTitleName;
  experienceTitleInput.placeholder = 'Scientist';
  experienceTitleInput.className = 'form-control';
  experienceTitleInput.minLength = 2;
  experienceTitleInput.maxLength = 30;

  const experienceStartDateInput = document.createElement('input');
  experienceStartDateInput.type = 'date';
  experienceStartDateInput.name = experienceStartDateName;
  experienceStartDateInput.id = experienceStartDateName;
  experienceStartDateInput.placeholder = '4/20/2020';
  experienceStartDateInput.className = 'form-control';

  const experienceEndDateInput = document.createElement('input');
  experienceEndDateInput.type = 'date';
  experienceEndDateInput.name = experienceEndDateName;
  experienceEndDateInput.id = experienceEndDateName;
  experienceEndDateInput.placeholder = '4/20/2021';
  experienceEndDateInput.className = 'form-control';

  const experienceContactAgreementInput = document.createElement('input');
  experienceContactAgreementInput.type = 'checkbox';
  experienceContactAgreementInput.name = experienceContactAgreementName;
  experienceContactAgreementInput.id = experienceContactAgreementName;
  experienceContactAgreementInput.className = 'form-check-input';

  // Create the textarea
  const experienceDescriptionTextarea = document.createElement('textarea');
  experienceDescriptionTextarea.name = experienceDescriptionName;
  experienceDescriptionTextarea.id = experienceDescriptionName;
  experienceDescriptionTextarea.placeholder = 'Experience Description';
  experienceDescriptionTextarea.className = 'form-control';

  // Create the labels
  const employerNameLabel = document.createElement('label');
  employerNameLabel.htmlFor = employerNameName;
  employerNameLabel.textContent = `Employer Name ${workExperienceGroupsCount}`;

  const supervisorNameLabel = document.createElement('label');
  supervisorNameLabel.htmlFor = supervisorNameName;
  supervisorNameLabel.textContent = `Supervisor Name ${workExperienceGroupsCount}`;

  const experiencePhoneNumberLabel = document.createElement('label');
  experiencePhoneNumberLabel.htmlFor = experiencePhoneNumberName;
  experiencePhoneNumberLabel.textContent = `Phone Number ${workExperienceGroupsCount}`;

  const experienceTitleLabel = document.createElement('label');
  experienceTitleLabel.htmlFor = experienceTitleName;
  experienceTitleLabel.textContent = `Last Job Title ${workExperienceGroupsCount}`;

  const experienceStartDateLabel = document.createElement('label');
  experienceStartDateLabel.htmlFor = experienceStartDateName;
  experienceStartDateLabel.textContent = `Employment Start ${workExperienceGroupsCount}`;

  const experienceEndDateLabel = document.createElement('label');
  experienceEndDateLabel.htmlFor = experienceEndDateName;
  experienceEndDateLabel.textContent = `Employment End ${workExperienceGroupsCount}`;

  const experienceDescriptionLabel = document.createElement('label');
  experienceDescriptionLabel.htmlFor = experienceDescriptionName;
  experienceDescriptionLabel.textContent = `List duties performed, skills used, etc.`;

  const experienceContactAgreementLabel = document.createElement('label');
  experienceContactAgreementLabel.htmlFor = experienceContactAgreementName;
  experienceContactAgreementLabel.textContent = `May we contact this employer?`;
  experienceContactAgreementLabel.className = 'form-check-label';

  // Append the inputs and labels to columns
  employerNameColumn.appendChild(employerNameInput);
  employerNameColumn.appendChild(employerNameLabel);

  supervisorNameColumn.appendChild(supervisorNameInput);
  supervisorNameColumn.appendChild(supervisorNameLabel);

  experiencePhoneNumberColumn.appendChild(experiencePhoneNumberInput);
  experiencePhoneNumberColumn.appendChild(experiencePhoneNumberLabel);

  experienceStartDateColumn.appendChild(experienceStartDateInput);
  experienceStartDateColumn.appendChild(experienceStartDateLabel);

  experienceTitleColumn.appendChild(experienceTitleInput);
  experienceTitleColumn.appendChild(experienceTitleLabel);

  experienceEndDateColumn.appendChild(experienceEndDateInput);
  experienceEndDateColumn.appendChild(experienceEndDateLabel);

  experienceDescriptionColumn.appendChild(experienceDescriptionTextarea);
  experienceDescriptionColumn.appendChild(experienceDescriptionLabel);

  experienceContactAgreementColumn.appendChild(experienceContactAgreementInput);
  experienceContactAgreementColumn.appendChild(experienceContactAgreementLabel);

  // Append the columns to the row
  inputsRow.appendChild(employerNameColumn);
  inputsRow.appendChild(supervisorNameColumn);
  inputsRow.appendChild(experiencePhoneNumberColumn);
  inputsRow.appendChild(experienceTitleColumn);
  inputsRow.appendChild(experienceStartDateColumn);
  inputsRow.appendChild(experienceEndDateColumn);

  // Append the column to the textarea row
  textareaRow.appendChild(experienceDescriptionColumn);

  // Append the column to the checkbox row
  checkboxRow.appendChild(experienceContactAgreementColumn);

  // Append the rows to the main row
  row.appendChild(inputsRow);
  row.appendChild(textareaRow);
  row.appendChild(checkboxRow);

  // Append the row to the container
  const workExperiencesContainer = document.getElementById('WorkExperiencesContainer');
  workExperiencesContainer.appendChild(row);
}
