// AOS initialize
AOS.init({
    duration: 2000,
});

// VenoBox initialize
new VenoBox({
    selector: '.venobox',
    numeration: true,
    infinigall: true,
    share: true,
    spinner: 'rotating-plane'
});

// JS for Scroll Up Button
window.onscroll = () => {
    toggleTopButton();
}
function scrollToTop(){
    window.scrollTo({top: 0, behavior: 'smooth'});
}

function toggleTopButton() {
    if (document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20) {
        document.getElementById('scrollUp').classList.remove('d-none');
    } else {
        document.getElementById('scrollUp').classList.add('d-none');
    }
}

// JS for Form Validation
const form = document.getElementById('form');
const name = document.getElementById('name');
const email = document.getElementById('email');
const subject = document.getElementById('subject');
const description = document.getElementById('description');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
}

const setSuccess = (element) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');

}

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
    const nameValue = name.value.trim();
    const emailValue = email.value.trim();
    const subjectValue = subject.value.trim();
    const descriptionValue = description.value.trim();

    if(nameValue === ''){
        setError(name, 'Name is required');
    } else{
        setSuccess(name);
    }

    if(emailValue === ''){
        setError(email, 'Email is required');
    } else if(!isValidEmail(emailValue)){
        setError(email, 'Provide a valid email address');
    } else{
        setSuccess(email);
    }

    if(subjectValue === ''){
        setError(subject, 'Subject is required');
    } else{
        setSuccess(subject);
    }

    if(descriptionValue === ''){
        setError(description, 'Description is required');
    } else{
        setSuccess(description);
    }
}