const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Hello, World! This is a sample Node.js application.');
});
// // Select the container where the form will be added
// const formContainer = document.getElementById('form-container');

// // Create a form element
// const form = document.createElement('form');

// // Create the first input field (Name)
// const nameLabel = document.createElement('label');
// nameLabel.textContent = 'Name:';
// const nameInput = document.createElement('input');
// nameInput.type = 'text';
// nameInput.id = 'name';
// nameInput.placeholder = 'Enter your name';

// // Create the second input field (Email)
// const emailLabel = document.createElement('label');
// emailLabel.textContent = 'Email:';
// const emailInput = document.createElement('input');
// emailInput.type = 'email';
// emailInput.id = 'email';
// emailInput.placeholder = 'Enter your email';

// // Create a submit button
// const submitButton = document.createElement('button');
// submitButton.type = 'submit';
// submitButton.textContent = 'Submit';

// // Append the fields and button to the form
// form.appendChild(nameLabel);
// form.appendChild(nameInput);
// form.appendChild(document.createElement('br')); // Line break
// form.appendChild(emailLabel);
// form.appendChild(emailInput);
// form.appendChild(document.createElement('br')); // Line break
// form.appendChild(submitButton);

// // Add the form to the container in the HTML
// formContainer.appendChild(form);


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
