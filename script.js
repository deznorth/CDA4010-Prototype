function handleSubmit() {
  const form = document.getElementById('Form');
  // Object containing all form data keyed by their "name" property
  const formData = Object.fromEntries(new FormData(form));
  console.log(formData);
}
