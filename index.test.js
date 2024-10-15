import { expect } from 'chai';
import { JSDOM } from 'jsdom';
import sinon from 'sinon';

// Simulate the simple form page
const { window } = new JSDOM(`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Simple Form</title>
</head>
<body>
    <h2>Simple Form</h2>
    <form id="simpleForm">
        <label for="name">Name:</label><br>
        <input type="text" id="name" name="name" placeholder="Enter your name" required><br><br>

        <label for="email">Email:</label><br>
        <input type="email" id="email" name="email" placeholder="Enter your email" required><br><br>

        <input type="submit" value="Submit">
    </form>

    <script>
        document.getElementById('simpleForm').addEventListener('submit', function(e) {
            e.preventDefault(); // Prevent default form submission
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;

            alert(\`Submitted! Name: \${name}, Email: \${email}\`);
        });
    </script>
</body>
</html>
`);

// Describe the test suite
describe('Simple Form Functionality', function() {
    it('should display alert with submitted values', function() {
        // Set input values
        window.document.getElementById('name').value = 'John Doe';
        window.document.getElementById('email').value = 'john@example.com';

        // Spy on the alert function
        const alertStub = sinon.stub(window, 'alert');

        // Simulate form submission
        window.document.getElementById('simpleForm').dispatchEvent(new window.Event('submit'));

        // Check if alert was called with the correct message
        expect(alertStub.calledOnce).to.be.true;
        expect(alertStub.calledWith('Submitted! Name: John Doe, Email: john@example.com')).to.be.true;

        // Restore the original alert function
        alertStub.restore();
    });
});
