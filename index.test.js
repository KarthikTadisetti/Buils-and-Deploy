const { JSDOM } = require('jsdom');
const { assert } = require('chai');

// Load the HTML file
const html = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login Page</title>
</head>
<body>
    <h2>Login</h2>
    <form id="loginForm">
        <label for="email">Email:</label><br>
        <input type="email" id="email" name="email" placeholder="Enter your email" required><br><br>

        <label for="password">Password:</label><br>
        <input type="password" id="password" name="password" placeholder="Enter your password" required><br><br>

        <input type="submit" value="Login">
    </form>

    <script>
        document.getElementById('loginForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;

            if (email === 'test@example.com' && password === 'password') {
                window.location.href = './next.html'; // Redirect to next page
            } else {
                alert('Invalid email or password.');
            }
        });
    </script>
</body>
</html>
`;

describe('Login Form', function() {
    let window, document;

    // Set up the DOM for testing
    before(function() {
        const dom = new JSDOM(html, { runScripts: "outside-only" });
        window = dom.window;
        document = window.document;
    });

    it('should redirect to next.html for valid login', function() {
        document.getElementById('email').value = 'test@example.com';
        document.getElementById('password').value = 'password';

        // Simulate form submission
        document.getElementById('loginForm').dispatchEvent(new window.Event('submit'));

        // Check if redirected
        assert.equal(window.location.href, 'http://localhost/next.html');
    });

    it('should show alert for invalid login', function() {
        document.getElementById('email').value = 'wrong@example.com';
        document.getElementById('password').value = 'wrongpassword';

        // Mock the alert function
        window.alert = function(message) {
            assert.equal(message, 'Invalid email or password.');
        };

        // Simulate form submission
        document.getElementById('loginForm').dispatchEvent(new window.Event('submit'));
    });
});
