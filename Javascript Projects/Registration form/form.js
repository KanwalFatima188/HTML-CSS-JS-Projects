function nextForm() {
    if (validateForm('form1')) {
        document.getElementById('form1').style.display = 'none';
        document.getElementById('form2').style.display = 'block';
    }
}

function previousForm() {
    document.getElementById('form2').style.display = 'none';
    document.getElementById('form1').style.display = 'block';
}

function validateForm(formId) {
    const form = document.getElementById(formId);
    const inputs = form.querySelectorAll('input[required]');
    let isValid = true;

    inputs.forEach(input => {
        if (!input.value) {
            isValid = false;
            showError(input, 'This field is required');
        } else {
            clearError(input);
        }
    });

    return isValid;
}

function showError(input, message) {
    const errorElement = input.nextElementSibling;
    if (errorElement && errorElement.className === 'error-message') {
        errorElement.textContent = message;
    } else {
        const error = document.createElement('div');
        error.className = 'error-message';
        error.textContent = message;
        input.parentNode.insertBefore(error, input.nextSibling);
    }
    input.style.borderColor = 'red';
}

function clearError(input) {
    const errorElement = input.nextElementSibling;
    if (errorElement && errorElement.className === 'error-message') {
        errorElement.remove();
    }
    input.style.borderColor = '';
}

document.getElementById('form2').addEventListener('submit', function(e) {
    e.preventDefault();
    if (validateForm('form2')) {

        console.log('Form submitted!');
        alert('Registration form submitted successfully!');
    }
});

const inputs = document.querySelectorAll('input');
inputs.forEach(input => {
    input.addEventListener('input', function() {
        if (this.validity.valid) {
            this.style.borderColor = 'green';
            clearError(this);
        } else {
            this.style.borderColor = 'red';
        }
    });
});