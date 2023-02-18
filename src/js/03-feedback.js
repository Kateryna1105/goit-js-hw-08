import throttle from "lodash.throttle";

const refs = {
    form: document.querySelector('.feedback-form'),
    input: document.querySelector('.feedback-form input'),
    textarea: document.querySelector('.feedback-form textarea'),
};

refs.form.addEventListener('submit', onFormSubmit);
refs.input.addEventListener('input', onInput);
refs.textarea.addEventListener('input', throttle (onTextarea, 500));

const formData = {};

populateForm();

function onInput(evt) {

    formData[evt.target.name] = evt.currentTarget.value;
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

function onTextarea(evt) {
  formData[evt.target.name] = evt.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

function onFormSubmit(evt) {
    evt.preventDefault();
    // console.log('Отправляем форму');

    const savedFormVars = localStorage.getItem('feedback-form-state');
    const parsFormVars = JSON.parse(savedFormVars);
    console.log(parsFormVars);

    evt.currentTarget.reset();
    localStorage.removeItem('feedback-form-state');
    formData.email = '';
    formData.message = '';
}


function populateForm() {
  
const savedFormVars = localStorage.getItem('feedback-form-state');
const parsFormVars = JSON.parse(savedFormVars);
    
    if (parsFormVars) {
      refs.input.value = parsFormVars.email || '';
      refs.textarea.value = parsFormVars.message || '';
            }
}
